import products from './products'

export default async ({ Product, Sku }) => {
  try {
    for (const product of products) {
      const newProduct = await Product.create(product)

      for (const sku of product.skus || []) {
        sku.productId = newProduct.productId
        await Sku.create(sku)
      }
    }
  } catch (e) {
    throw new Error(e)
  }
}
