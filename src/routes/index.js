import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Service Product.')
})

router.get('*', (req, res) => {
  res.send('Service Product, Not match any routes.')
})

export default router
