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
  },
}
