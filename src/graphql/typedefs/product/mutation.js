import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    createProduct(
      data: [ProductCreateInput!]
    ): ProductCreateResponse!

    updateProduct(
      productId: String!,
      name: String,
      detail: String,
      specifications: [String!],
      rating: Float,
      imageSmall: String,
      imageMedium: String,
      imageLarge: String,
    ): String!
  }
`
