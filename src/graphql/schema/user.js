import { gql } from 'apollo-server-express'

export default gql`
    type Query {
        users: [User!]
    }

    type User {
        userId: String!,
        username: String!,
        role: String!,
        createdAt: String!,
        updatedAt: String!,
    }

    type Mutation {
        createUser(username: String!, password: String!, role: String!): User!
    }
`
