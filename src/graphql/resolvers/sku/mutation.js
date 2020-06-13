import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, hasPermissionProductWrite } from '../../authorization'

export default {
  Mutation: {
    createSku: combineResolvers(
        isLoggedIn,
        hasPermissionProductWrite,
        (root, args, { models: { Sku } }) => {
          const skus = Sku.bulkCreate(args.data)
          return {
            skus,
          }
        },
    ),

    updateSku: combineResolvers(
        isLoggedIn,
        hasPermissionProductWrite,
        async (root, args, { models: { Sku } }) => {
          return Sku.updateMany(args.data, {
            primaryId: 'skuId',
          })
        },
    ),
  },
}
