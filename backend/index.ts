import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';
import jwt from 'jsonwebtoken';
import { DecodedToken } from './types';

const app = express();

dotenv.config();

const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ( { req }: { req: reqWithUser }) => {
        if (req.headers.cookie) {
            const [avain, token] = req.headers.cookie.split('=');
            if (avain === "suklaaKeksi") {
                if (jwt.verify(token, process.env.TOKEN_KEY as string)) {
                    const user = jwt.decode(token) as DecodedToken;
                    return { user };
                }
            }
        }

    },
})
server.start().then(() => {
    server.applyMiddleware( { app, cors: false });
    app.listen({ port: process.env.PORT || 4000 }, () => {
        console.log('Server running... maybe');
    });
})

export interface reqWithUser extends express.Request {
    user: {
        id: number,
        name: string,
        rooli: string,
    }
}