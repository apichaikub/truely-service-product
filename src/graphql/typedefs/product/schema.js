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

  type ProductCreateResponse {
    product: Product!,
    skus: [Sku!],
  }
`
