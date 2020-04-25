import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import { getUser } from './graphql/authorization'
import { sequelize, models } from './config/database'
import router from './routes'

const app = express()
const graphqlPath = '/graphql'
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      user: getUser(req.headers.authorization),
      models,
    }
  },
})

server.applyMiddleware({ app, path: graphqlPath })

app.use(router)

sequelize.authenticate().then(function(err) {
  app.listen(process.env.PORT, () => {
    console.log(`Running on port: ${process.env.PORT}`)
  })
})
