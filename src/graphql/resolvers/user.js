import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../authorization'

export default {
  Query: {
    users: combineResolvers(
        (root, args, { models }) => {
          return models.User.findAll()
        },
    ),
  },

  Mutation: {
    createUser: combineResolvers(
        isLoggedIn,
        isAdmin,
        (root, args, { models }) => {
          return models.User.create({
            username: args.username,
            password: args.password,
            role: args.role,
          })
        },
    ),
  },
}
