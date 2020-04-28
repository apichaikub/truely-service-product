import { combineResolvers } from 'graphql-resolvers'
import { isLoggedIn, isAdmin } from '../../authorization'
import { getAllKeysExcept } from '../../../utils/lib'
import { RESPONSE_STATUS } from '../../../utils/enum'

export default {
  Mutation: {
    createProduct: combineResolvers(
        isLoggedIn,
        isAdmin,
        async (root, args, { models: { Product } }) => {
          const products = Product.bulkCreate(args.data)

          return {
            products,
          }
        },
    ),

    updateProduct: combineResolvers(
        isLoggedIn,
        isAdmin,
        async (root, args, { models: { Product } }) => {
          const values = getAllKeysExcept(args, ['productId', 'skus'])
          const options = {
            where: {
              productId: args.productId,
            },
          }

          const product = await Product.update(values, options)

          return product[0]?
            RESPONSE_STATUS.SUCCESS :
            RESPONSE_STATUS.FAIL
        },
    ),
  },
}
