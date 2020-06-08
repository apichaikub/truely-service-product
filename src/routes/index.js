import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Service Product.')
})

router.get('/products', (req, res) => {
  res.send('products')
})

router.get('/products/1', (req, res) => {
  res.send('a product')
})

router.get('*', (req, res) => {
  res.send('Service Product, Not match any routes.')
})

export default router
