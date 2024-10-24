input.onPinPressed(TouchPin.P0, function () {
    player.change(LedSpriteProperty.Y, 0 - speed)
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, 0 - speed)
})
input.onPinPressed(TouchPin.P2, function () {
    player.change(LedSpriteProperty.Y, speed)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, speed)
})
let player: game.LedSprite = null
let speed = 0
speed = 1
player = game.createSprite(0, 0)
basic.forever(function () {
    basic.pause(1000)
    speed += 0.1
})
