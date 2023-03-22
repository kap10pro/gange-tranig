input.onGesture(Gesture.Shake, function () {
    fakter = randint(1, 9)
    fakter2 = randint(1, 9)
    rasutat = fakter * fakter2
    basic.showString("?")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(fakter)
})
input.onButtonPressed(Button.A, function () {
    tier += 1
    basic.showNumber(tier)
})
input.onButtonPressed(Button.AB, function () {
    _get = tier * 10 + ener
    basic.showNumber(_get)
    if (rasutat == _get) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    tier = 0
    ener = 0
})
input.onButtonPressed(Button.B, function () {
    ener += 1
    basic.showNumber(ener)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showNumber(fakter2)
})
let ener = 0
let _get = 0
let tier = 0
let rasutat = 0
let fakter2 = 0
let fakter = 0
basic.showString("!")
basic.forever(function () {
	
})
