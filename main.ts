let potentiometer = 0
// Created by: Nina Mathew
// Created on: 10/07/20
// This program attaches a servo to the microbit.
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(potentiometer)
    servos.P2.setRange(0, 180)
    if (potentiometer <= 10) {
        let servo_angle = 0
        servos.P2.setAngle(0)
        basic.showNumber(servo_angle)
    }
    if (potentiometer <= 500) {
        servos.P2.setAngle(90)
    }
    if (potentiometer > 500) {
        servos.P2.setAngle(180)
    }
})
