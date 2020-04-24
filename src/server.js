import express from 'express'
// import { ApolloServer } from 'apollo-server-express'
// import typeDefs from './graphql/schema'
// import resolvers from './graphql/resolvers'
// import { sequelize, models } from './config/database'

const app = express()
const PORT = process.env.PORT
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: { models },
// })

// server.applyMiddleware({ app, path: '/graphql' })

app.get('/', (req, res) => {
  res.send('Service Product.')
})

app.get('/env', (req, res) => {
  res.send(process.env)
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})

// sequelize.authenticate().then(function(err) {
//   app.listen(PORT, () => {
//     console.log(`Running on port: ${PORT}`)
//   })
// })
