import { combineResolvers } from 'graphql-resolvers'

export default {
  Query: {
    skus: combineResolvers(
        (root, args, { models: { Sku } }) => {
          return Sku.findAll()
        },
    ),
  },
}
