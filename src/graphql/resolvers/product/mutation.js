import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'

export default {
  Mutation: {
    createProduct: combineResolvers(
        isLoggedIn,
        isAdmin,
        async (root, args, { models: { Product } }) => {
          return {
            products: Product.bulkCreate(args.data),
          }
        },
    ),

    updateProduct: combineResolvers(
        isLoggedIn,
        isAdmin,
        async (root, args, { models: { Product } }) => {
          return Product.updateMany(args.data, {
            primaryId: 'productId',
          })
        },
    ),
  },
}
