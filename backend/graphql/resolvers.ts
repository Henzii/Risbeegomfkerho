import userService from '../services/userService';
import { MutationAddGameArgs, MutationAddUserArgs, MutationLoginArgs, SafeUser, User } from '../types';
import bcrypt from 'bcrypt';
import { validString } from '../utils/validators';
import { UserInputError, ApolloError } from 'apollo-server-errors';
import jwt from 'jsonwebtoken';
import gameService from '../services/gameService';

const resolvers = {
    Query: {
        getUsers: async () => {
            const res = await userService.getAllUsers();
            return res;
        },
        getUser: async (_root: unknown, args: Pick<User, "name" | "id">) => {
            const res = await userService.getUser(
                (args.id) ? args.id : args.name
            );
            return res;
        }
    },

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
                active: false,
            }
            return newUser;
        },
        login: async (_root: unknown, args: MutationLoginArgs) => {
            const { name, password } = args;
            if (!validString(name) || !validString(password)) {
                throw new UserInputError('Väärä tunnus tai salasana')
            } else {
                const user = await userService.getUser(name);
                if (!user|| !(await bcrypt.compare(password, user.passwordHash)) ) throw new UserInputError('Väärä tunnus tai salasana');
                else {
                    const payload = {
                        id: user.id,
                        name: user.name
                    }
                    if (!validString(process.env.TOKEN_KEY)) throw new ApolloError('Avaimet hukassa')
                    const token = jwt.sign(payload, process.env.TOKEN_KEY) as JsonWebKey;
                    return token;
                }
            }
        },
        addGame: async(_root: unknown, args: MutationAddGameArgs) => {
            try {
                return gameService.addGame(args.game);
            } catch (e) {
                throw new Error('Peliä ei voitu lisätä!')
            }
        }
    }
}
export default resolvers;