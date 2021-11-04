import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Alias {
        id: ID!
        alias: String
        user: Int
    }
    type User {
        id: ID!
        name: String!
        email: String
        rooli: String!
        active: Boolean!
    }
    type LogEntry {
        date: String!
        process: String!
        name: String
        message: String!
    }
    input Game {
        course: String!
        layout: String!
        date: String!
        par: Int!
        players: [Player]
    }
    input Player {
        name: String!
        total: Int!
        scores: [Int!]!
    }
    type Query {
        getUsers: [User]!
        getUser(id: Int, name: String): User
        getMe: String!
        getLogs(process: String): [LogEntry]!
    }

    type Mutation {
        addUser(name: String! email: String password: String!): User
        login(name: String! password: String!): String

        addGame(game: Game!): Int
    }
`;

export default typeDefs;