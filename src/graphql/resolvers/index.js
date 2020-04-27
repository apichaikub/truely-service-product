import userResolvers from './user'
import productResolvers from './product'
import skuResolvers from './sku'

export default [
  ...userResolvers,
  ...productResolvers,
  ...skuResolvers,
]
