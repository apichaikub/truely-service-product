import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'
import { getUser } from './graphql/authorization'
import { models } from './models'
import router from './routes'

const { port } = config
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

server.applyMiddleware({
  app,
  path: graphqlPath,
})

app.use(router)

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
