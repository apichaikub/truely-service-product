import { combineResolvers } from 'graphql-resolvers'

export default {
  Query: {
    products: combineResolvers(
        (root, args, { models: { Product } }) => {
          return Product.findAll()
        },
    ),
    product: combineResolvers(
        (root, args, { models: { Product } }) => {
          console.log('args', args)
          return Product.findOne({
            where: {
              productId: args.id,
            },
          })
        },
    ),
  },
}
