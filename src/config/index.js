export default {
  // set port for the server. use `src/server.js`.
  'port': process.env.PORT,

  // use `sequelize` to connect multiple databases `src/config/database.js`.
  'databases': {
    'postgres': {
      'uri': process.env.DATABASE_URL_PRODUCT,
    },
  },

  // services api
  'services': {
    'authorization': process.env.SERVICE_AUTHORIZATION,
  },

  // gateway api
  'gateway': {
    'api': process.env.API_GATEWAY,
  },
}
