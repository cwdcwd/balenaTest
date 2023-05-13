const { Router} = require('express')
const { getState, setState } = require('../blinker')

const router = Router()


router.get('/api/led', async (req, res) => {
  res.json({ led: getState()? 'on' : 'off' })
})

router.put('/api/led', async (req, res) => {
  console.log(req.body)
  if (req.body?.state === 'on') {
    await setState(true)
  } else if (req.body?.state === 'off') {
    await setState(false)
  }

  res.json({ state: getState() ? 'on' : 'off' })
})

module.exports = router
