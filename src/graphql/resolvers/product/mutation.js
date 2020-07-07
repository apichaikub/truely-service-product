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
          const values = args.data
          const options = { primaryId: 'productId' }
          return Product.updateMany(values, options)
        },
    ),

    deleteProduct: combineResolvers(
        isLoggedIn,
        hasPermissionProductWrite,
        async (root, args, { models: { Product } }) => {
          const values = args.ids.map((id) =>({
            productId: id,
            deletedAt: new Date(),
          }))
          const options = { primaryId: 'productId' }
          return Product.updateMany(values, options)
        },
    ),
  },
}
