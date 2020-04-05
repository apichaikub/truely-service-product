import express from "express"

const app = express()
const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('Service Product CI/CD is working fine.')
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})