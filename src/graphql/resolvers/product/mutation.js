import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, hasPermissionProductWrite } from '../../authorization'

export default {
  Mutation: {
    createProduct: combineResolvers(
        isLoggedIn,
        hasPermissionProductWrite,
        async (root, args, { models: { Product } }) => {
          return {
            products: Product.bulkCreate(args.data),
          }
        },
    ),

    updateProduct: combineResolvers(
        isLoggedIn,
        hasPermissionProductWrite,
        async (root, args, { models: { Product } }) => {
          return Product.updateMany(args.data, {
            primaryId: 'productId',
          })
        },
    ),
  },
}
