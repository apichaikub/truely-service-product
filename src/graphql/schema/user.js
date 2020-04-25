import { gql } from 'apollo-server-express'

export default gql`
    type Query {
        users: [User!]
    }

    type User {
        id: String!,
        username: String!,
        createdAt: String!,
        updatedAt: String!,
    }

    type Mutation {
        createUser(username: String!, password: String!): User!
    }
`
