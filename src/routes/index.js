import express from 'express'
// eslint-disable-next-line new-cap
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Service Product.')
})

export default router
