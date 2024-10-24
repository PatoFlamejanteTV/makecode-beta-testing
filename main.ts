input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    player.change(LedSpriteProperty.Y, 0 - speed)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    player.change(LedSpriteProperty.X, 0 - speed)
})
input.onPinPressed(TouchPin.P2, function on_pin_pressed_p2() {
    player.change(LedSpriteProperty.Y, speed)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    player.change(LedSpriteProperty.X, speed)
})
let player : game.LedSprite = null
let speed = 0
speed = 1
player = game.createSprite(0, 0)
basic.forever(function on_forever() {
    
    basic.pause(1000)
    speed += 0.1
})
