import { gql } from 'apollo-server-express'

import userTypeDefs from './user'
import productTypeDefs from './product'

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
  ...userTypeDefs,
  ...productTypeDefs,
]
