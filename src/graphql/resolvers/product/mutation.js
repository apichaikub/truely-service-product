import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'

export default {
  Mutation: {
    createProduct: combineResolvers(
        isLoggedIn,
        isAdmin,
        (root, args, { models: { Product } }) => {
          const product = Product.create({
            name: args.name,
          })
          return {
            product,
          }
        },
    ),
  },
}
