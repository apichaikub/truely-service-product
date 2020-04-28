import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'

export default {
  Mutation: {
    createSku: combineResolvers(
        isLoggedIn,
        isAdmin,
        (root, args, { models: { Sku } }) => {
          const skus = Sku.bulkCreate(args.data)
          return {
            skus,
          }
        },
    ),

    updateSku: combineResolvers(
        isLoggedIn,
        isAdmin,
        async (root, args, { models: { Sku } }) => {
          return Sku.updateMany(args.data, {
            primaryId: 'skuId',
          })
        },
    ),
  },
}
