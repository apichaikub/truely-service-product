import { gql } from 'apollo-server-express'

export default gql`
    extend type Mutation {
        createProduct(
            name: String!,
        ): ProductCreateResponse!
    }
`
