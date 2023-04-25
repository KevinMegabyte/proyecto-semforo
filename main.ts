led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P13, 0)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(187.5)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(187.5)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1500)
    pins.digitalWritePin(DigitalPin.P14, 0)
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(187.5)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(187.5)
    }
})
