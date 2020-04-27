import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    createSku(
      data: [SkuCreateInput!]
    ): SkuCreateResponse!
  }
`
