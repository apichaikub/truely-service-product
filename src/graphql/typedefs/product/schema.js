import { gql } from 'apollo-server-express'

export default gql`
  type Product {
    productId: String!,
    name: String,
    detail: String,
    specifications: [String],
    rating: Float,
    imageSmall: String,
    imageMedium: String,
    imageLarge: String,
    createdAt: String,
    updatedAt: String,
  }

  input ProductCreateInput {
    name: String,
    detail: String,
    specifications: [String!],
    rating: Float,
    imageSmall: String,
    imageMedium: String,
    imageLarge: String,
  }

  type ProductCreateResponse {
    products: [Product!],
  }
`
