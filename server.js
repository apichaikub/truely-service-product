const express = require('express')
const app = express()

const PORT = process.env.PORT || 5002

app.get('/', (req, res) => {
  res.send('Service Product')
})

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})