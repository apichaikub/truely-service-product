import { combineResolvers } from 'graphql-resolvers'

export default {
  Query: {
    products: combineResolvers(
        (root, args, { models: { Product } }) => {
          return Product.findAll()
        },
    ),
  },
}
