import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { finished } from 'stream';
import { parseCsv } from '../utils/csvParser';

import { UserInputError, ApolloError, AuthenticationError } from 'apollo-server-errors';

import userService from "../services/userService";
import gameService from '../services/gameService';
import setupService from '../services/setupService';

import { validInt, validString } from "../utils/validators";

import { DecodedToken, MutationAddGameArgs, SafeUser, ContextUserToken } from '../types';

export const mutations = {
    Mutation: {
        addUser: async (_root: unknown, args: MutationAddUserArgs) => {
            if (!validString(args.name) || !validString(args.password)) throw new UserInputError('Argumentit ei kelpaa...');

            const hashedPassoword = await bcrypt.hash(args.password, 10);
            const res = await userService.addUser(args.name, args.email, hashedPassoword);
            const newUser: SafeUser = {
                id: res.insertId,
                name: args.name,
                email: args.email,
                rooli: 'user',
                active: 0,
            }
            return newUser;
        },
        login: async (_root: unknown, args: MutationLoginArgs) => {
            const { name, password } = args;
            if (!validString(name) || !validString(password)) {
                throw new UserInputError('Väärä tunnus tai salasana')
            } else {
                const user = await userService.getUser(name);
                if (!user || !(await bcrypt.compare(password, user.passwordHash))) throw new UserInputError('Väärä tunnus tai salasana');
                if (user.active !== 1) throw new AuthenticationError('Tunnusta ei ole aktivoitu!');
                else {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        rooli: user.rooli,
                    }
                    if (!validString(process.env.TOKEN_KEY)) throw new ApolloError('Avaimet hukassa')
                    const token = jwt.sign(payload, process.env.TOKEN_KEY) as JsonWebKey;
                    return token;
                }
            }
        },
        addGame: async (_root: unknown, args: MutationAddGameArgs) => {
            try {
                return gameService.addGame(args.game);
            } catch (e) {
                throw new Error('Peliä ei voitu lisätä!')
            }
        },
        addAlias: async (_root: unknown, args: { alias: string, userId: number }, context: { user: DecodedToken }) => {
            // Jos ei kirjautunut sisään
            if (!context.user) throw new AuthenticationError('Access denied');
            
            // Vain admin voi antaa userId-argumentin
            if (args.userId && context.user.rooli !== 'admin') throw new AuthenticationError('Access denied');
            
            if (!args.alias) throw new UserInputError('What alias?');
            const userId = args.userId || context.user.id;
            try {
                return userService.addAlias(userId, args.alias);
            } catch (e) {
                throw new UserInputError('Aliasta ei voitu lisätä :P');
            }
        },
        deleteAlias: async (_root: unknown, args: { aliasId: number }, context: { user: DecodedToken }) => {
            if (!context?.user?.id) throw new AuthenticationError('Access denied');
            let userId: number | undefined = context.user.id;

            if (context.user.rooli === 'admin') userId = undefined;
            // Jos userId annettu, tulee sen täsmätä deleteAliaksessa aliasId:hen.
            // => admin voi muokata kaikkien aliaksia
            
            const poistetut = await userService.deleteAlias(args.aliasId, userId);
            if (poistetut > 0)
                return true;
            return false;
        },
        uploadCsvFile: async (_paret: unknown, args: any, context: { user: DecodedToken }) => {
            if (!context.user?.id) throw new AuthenticationError('Access denied');
            return args.file.then((file: any) => {
                const { createReadStream } = file // createReadStream, filename, mimetype
                const fileStream = createReadStream();
                fileStream.pipe(fs.createWriteStream(`./upload/${context.user.name}.csv`));
                finished(fileStream, () => {
                    parseCsv(`${context.user.name}.csv`, context.user.name);
                })
                return file;
            });
        },
        setSetup: async (_root: unknown, args: SetupArgs, context: ContextUserToken) => {
            if (context.user?.rooli !== 'admin') throw new AuthenticationError('Access denied');
            return await setupService.writeSetup(args);
        },
        updateUser: async (_root: unknown, args: { email?: string, password?: string, rooli?: string, userId?: string }, context: ContextUserToken) => {
            if (!context?.user?.id) throw new AuthenticationError('Access denied');
            if ((args.rooli || args.userId) && context.user.rooli !== 'admin') throw new AuthenticationError('Access denied');

            let id = context.user.id;

            if (args.userId) {
                id = parseInt(args.userId)
                if (!validInt(id)) throw new Error('Virheellinen id-argumentti');
            }

            const pwHash = (args.password) ? await bcrypt.hash(args.password, 10) : undefined;
            const res = await userService.updateUser(pwHash, args.email, id, args.rooli);
            return res;
        },
        activateUser: async (_root: unknown, args: { userId: number }, context: ContextUserToken) => {
            if (context.user?.rooli !== 'admin') throw new AuthenticationError('Access denied');
            const res = await userService.activateUser(args.userId);
            return res;
        },
        deleteUser: async (_root: unknown, args: { userId: number }, context: ContextUserToken) => {
            if (context.user?.rooli !== 'admin') throw new AuthenticationError('Access denied');
            const res = await userService.deleteUser(args.userId);
            return res;
        },
    },
}

export type MutationAddUserArgs = {
    name: string | undefined,
    email: string | undefined,
    password: string | undefined
}
export type MutationLoginArgs = {
    name: string | undefined,
    password: string | undefined
}
export type SetupArgs = {
    minPlayersForMatch?: number,
    minPlayersForHc?: number,
    ignoreHcBefore?: string,
    ignoreMatchBefore?: string,
}
