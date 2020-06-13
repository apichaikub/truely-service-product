import Sequelize from 'sequelize'
import config from '../config/'

// connect to progres
const postgreProductDB = new Sequelize(config.databases.postgres.product, {
  dialect: 'postgres',
})

export {
  postgreProductDB,
}
