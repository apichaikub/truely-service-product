import { combineResolvers } from 'graphql-resolvers'

export default {
  Query: {
    users: combineResolvers(
        (root, args, { models: { User } }) => {
          return User.findAll()
        },
    ),
  },
}
