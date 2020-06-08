import Sequelize from 'sequelize'
import config from '../config/'

// connect to progres
const postgreUserDB = new Sequelize(config.databases.postgres.uri, {
  dialect: 'postgres',
})

export {
  postgreUserDB,
}
