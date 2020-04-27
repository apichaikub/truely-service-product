import { gql } from 'apollo-server-express'

export default gql`
  type User {
    userId: String!,
    username: String,
    role: String,
    createdAt: String,
    updatedAt: String,
  }
`
