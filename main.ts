control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    sprite = 10
})
let sprite = 0
if (true) {
	
}
basic.forever(function () {
    images.createImage(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `).showImage(0)
    basic.showString("NAHUEL")
})
