import productResolvers from './product'
import skuResolvers from './sku'

export default [
  ...productResolvers,
  ...skuResolvers,
]
