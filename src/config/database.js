import Sequelize from 'sequelize'

let sequelize = null

// this work on product heroku provide use env `DATABASE_URL`.
console.log('process.env.DATABASE_URL', process.env.DATABASE_URL)
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

