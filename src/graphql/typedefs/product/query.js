import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
      products: [Product!],
      product(id: ID!): Product,
    }
`
