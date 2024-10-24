input.onPinPressed(TouchPin.P0, function () {
    player.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
let sfcGamepad: sfc.gamepad = null
let getpresskeylist = sfcGamepad.cachePressedKeyList(
)
// i dont KNOW IF THIS WOKRS 💜
sfcGamepad = sfc.setSFC(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2
)
player = game.createSprite(0, 0)
