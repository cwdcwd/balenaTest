const { Router} = require('express')
const { getState, putState } = require('../blinker')

const router = Router()


router.get('/api/led', async (req, res) => {
  res.json({ led: getState()? 'on' : 'off' })
})

router.put('/api/led', async (req, res) => {
  if (req.body.led === 'on') {
    putState(true)
  } else if (req.body.led === 'off') {
    putState(false)
  }

  res.json({ led: getState() ? 'on' : 'off' })
})

module.exports = router
