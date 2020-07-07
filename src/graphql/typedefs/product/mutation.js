import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    createProduct(
      data: [ProductCreateInput!]
    ): ProductCreateResponse!

    updateProduct(
      data: [ProductUpdateInput!]
    ): [String!]

    deleteProduct(
      ids: [ID!]
    ): [String!]
  }
`
