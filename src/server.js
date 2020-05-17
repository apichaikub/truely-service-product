import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'
import { getUser } from './graphql/authorization'
import { TOKEN } from './helper/enum'
import { models } from './models'
import router from './routes'

const { port } = config
const { ENUM: { ACCESS_TOKEN, REFRESH_TOKEN } } = TOKEN
const app = express()
const graphqlPath = '/graphql'
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req: { headers } }) => {
    return {
      user: await getUser(headers[ACCESS_TOKEN], headers[REFRESH_TOKEN]),
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
