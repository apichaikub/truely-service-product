import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'
import { isArray } from '../../../utils/lib'

export default {
  Mutation: {
    createProduct: combineResolvers(
        isLoggedIn,
        isAdmin,
        async (root, args, { models: { Product, Sku } }) => {
          const product = await Product.create({
            name: args.name,
            detail: args.detail,
            specifications: args.specifications,
            rating: args.rating,
            imageSmall: args.imageSmall,
            imageMedium: args.imageMedium,
            imageLarge: args.imageLarge,
          })

          let skus = []

          if (isArray(args.skus)) {
            const skusInput = args.skus.map((sku) => {
              return {
                ...sku,
                productId: product.productId,
              }
            })

            skus = Sku.bulkCreate(skusInput)
          }

          return {
            product,
            skus,
          }
        },
    ),
  },
}
