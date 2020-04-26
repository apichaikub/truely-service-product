import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Service Product.')
})

export default router
