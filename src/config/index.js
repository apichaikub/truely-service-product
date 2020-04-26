export default {
  // set port for the server. use `src/server.js`.
  'port': process.env.PORT,

  // use `sequelize` to connect multiple databases `src/config/database.js`.
  'databases': {
    'postgres': {
      'uri': process.env.DATABASE_URL,
    },
  },
}
