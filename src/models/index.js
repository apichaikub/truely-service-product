import { postgreProductDB } from '../database'
import { updateMany } from '../helper/model'

// import all models here
// can be use with multiple databases
const models = {
  // User: postgreProductDB.import('../models/user'),
  Product: postgreProductDB.import('../models/product'),
  Sku: postgreProductDB.import('../models/sku'),
}

// set association to the models that was declared
// such as: hasMeny, belongsTo or ect.
Object.keys(models).forEach((key) => {
  const model = models[key]

  if ('associate' in model) {
    model.associate(models)
  }

  model.updateMany = (data, options) => {
    return updateMany(model, data, options)
  }
})

export {
  models,
}

