import { gql } from 'apollo-server-express'

import productTypeDefs from './product'
import skuTypeDefs from './sku'

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [
  linkSchema,
  ...productTypeDefs,
  ...skuTypeDefs,
]
