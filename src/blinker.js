const gpiop = require('rpi-gpio').promise

const LED_PIN = 7
let LED = false
let LEDState = false

async function blinkLED() { //function to start blinking
  if (!LED) {
    LED = await gpiop.setup(LED_PIN, gpiop.DIR_OUT)
  }

  if (LEDState) { 
    await gpiop.write(LED_PIN, false)
  } else {
    await gpiop.write(LED_PIN, true)
  }

  LEDState = !LEDState
  return LEDState
}

async function endBlink() { //function to stop blinking
  clearInterval(blinkInterval) // Stop blink intervals
  return await gpiop.write(LED_PIN, false)
}

function getState() {
  return LEDState
}

async function setState(state) {
  LEDState = state
  return await gpiop.write(LED_PIN, state)
}

// setTimeout(endBlink, 5000) //stop blinking after 5 seconds

module.exports = { blinkLED, endBlink, getState, setState }