import { users, products } from './data'

export default async (postgresdb, { User, Product, Sku }) => {
  postgresdb.sync({ force: true }).then(async () => {
    try {
      for (const user of users) {
        await User.create(user)
      }

      for (const product of products) {
        const newProduct = await Product.create(product)

        for (const sku of product.skus || []) {
          sku.productId = newProduct.productId
          await Sku.create(sku)
        }
      }
    } catch (e) {
      throw Error(e)
    }
  })
}
