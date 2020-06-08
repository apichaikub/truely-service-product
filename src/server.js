import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import config from './config'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'
import { getAuth } from './graphql/authorization'
import { TOKEN } from './helper/enum'
import { postgreUserDB } from './database'
import { models } from './models'
import router from './routes'
import faker from './helper/faker'

const { port } = config
const { ENUM: { ACCESS_TOKEN, REFRESH_TOKEN } } = TOKEN
const app = express()
const graphqlPath = '/graphql'
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req: { headers }, res }) => {
    const auth = await getAuth(headers[ACCESS_TOKEN], headers[REFRESH_TOKEN])
    const user = auth.user || null
    const newTokens = auth.tokens || {}

    if (Object.keys(newTokens).length) {
      // The clients able to access custom headers
      res.set('Access-Control-Expose-Headers', TOKEN.values.join(', '))
      // set response headers
      res.set(ACCESS_TOKEN, newTokens[ACCESS_TOKEN])
      res.set(REFRESH_TOKEN, newTokens[REFRESH_TOKEN])
    }

    return {
      user,
      models,
    }
  },
})

server.applyMiddleware({
  app,
  path: graphqlPath,
})

app.use(router)

postgreUserDB.sync({ force: true }).then(() => {
  faker(models)
  console.log('product service sync to postgreUserDB success.')
})

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
