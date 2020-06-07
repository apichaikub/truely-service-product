import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Service Product.')
})

router.get('/product', (req, res) => {
  res.send('Test route /product')
})

router.get('/product/1', (req, res) => {
  res.send('Test route /product/1')
})

router.get('*', (req, res) => {
  res.send('Service Product, Not match any routes.')
})

export default router
