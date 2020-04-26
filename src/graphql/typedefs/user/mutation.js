import { gql } from 'apollo-server-express'

export default gql`
    extend type Mutation {
        createUser(
            username: String!,
            password: String!,
            role: String!
        ): User!
    }
`
