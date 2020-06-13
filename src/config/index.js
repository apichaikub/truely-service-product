export default {
  // set port for the server. use `src/server.js`.
  'port': process.env.PORT,

  // use `sequelize` to connect multiple databases `src/config/database.js`.
  'databases': {
    'postgres': {
      'product': process.env.DATABASE_POSTGRE_PRODUCT,
    },
  },

  // gateway api
  'gateway': {
    'api': process.env.API_GATEWAY,
  },
}
