import { postgresdb } from '../database'
import faker from '../utils/faker'

// import all models here
// can be use with multiple databases
const models = {
  User: postgresdb.import('../models/user'),
  Product: postgresdb.import('../models/product'),
  Sku: postgresdb.import('../models/sku'),
}

// set association to the models that was declared
// such as: hasMeny, belongsTo or ect.
Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

// every time server is started, this function to
// clear all data and insert new one to the `postgres`
// for all tables including: users, products and skus
faker(postgresdb, models)

export {
  postgresdb,
  models,
}

