import Sequelize from 'sequelize'

let sequelize = null

// this work on product heroku provide use env `DATABASE_URL`.
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  })
} else { // this work on local development config on docker-compose.
  sequelize = new Sequelize({
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
  })
}

const models = {
  User: sequelize.import('../models/user'),
  Product: sequelize.import('../models/product'),
  Sku: sequelize.import('../models/sku'),
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

sequelize.sync({ force: true }).then(async () => {
  const { User, Product, Sku } = models

  await User.create({
    username: 'chai001',
    password: '123456',
    role: 'ADMIN',
  })

  const product = await Product.create({
    name: 'product 001',
  })

  await Sku.create({
    code: 'SHIRT-BLUE-M',
    attributes: [{ 'name': 'size', 'option': 'M' }],
    price: 2500,
    inStock: 30,
    discountType: 'PERCENTAGE',
    productId: product.productId,
  })
})

export { sequelize, models }

