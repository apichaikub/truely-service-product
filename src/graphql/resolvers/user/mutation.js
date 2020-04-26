import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'

export default {
  Mutation: {
    createUser: combineResolvers(
        isLoggedIn,
        isAdmin,
        (root, args, { models: { User } }) => {
          return User.create({
            username: args.username,
            password: args.password,
            role: args.role,
          })
        },
    ),
  },
}
