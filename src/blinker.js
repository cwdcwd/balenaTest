const pins = require("pi-pins")
const LED = pins.connect(4) //use GPIO pin 4, and specify that it is output

LED.mode("out") //set pin to output

// var blinkInterval = setInterval(blinkLED, 250) //run the blinkLED function every 250ms

function blinkLED() { //function to start blinking
  if (LED.value()) { //check the pin state, if the state is 0 (or off)
    LED.value(true) //set pin state to 1 (turn LED on)
  } else {
    LED.value(false) //set pin state to 0 (turn LED off)
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval) // Stop blink intervals
  LED.value(false) // Turn LED off
}

// setTimeout(endBlink, 5000) //stop blinking after 5 seconds

module.exports = { blinkLED, endBlink }