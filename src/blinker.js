const gpiop = require('rpi-gpio').promise

const LED_PIN = 7
let LED = false
const LEDOn = false

async function blinkLED() { //function to start blinking
  if (!LED) {
    LED = await gpiop.setup(LED_PIN, gpiop.DIR_OUT)
  }

  if (LEDOn) { 
    await gpiop.write(LED_PIN, false)
  } else {
    await gpiop.write(LED_PIN, true)
  }

  LEDOn = !LEDOn
  return LEDOn
}

async function endBlink() { //function to stop blinking
  clearInterval(blinkInterval) // Stop blink intervals
  return await gpiop.write(LED_PIN, false)
}

// setTimeout(endBlink, 5000) //stop blinking after 5 seconds

module.exports = { blinkLED, endBlink }