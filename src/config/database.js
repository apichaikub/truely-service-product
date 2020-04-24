import Sequelize from 'Sequelize'

const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: 'postgres',
})

const models = {
  User: sequelize.import('../models/user'),
}

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

sequelize.sync({ force: true }).then(() => {
  models.User.create({
    username: 'chai001',
    password: '123456',
  }).then((r) => {
    console.log('create success')
  })
})

export { sequelize, models }

