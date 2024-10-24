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
// i dont KNOW IF THIS WOKRS :purpleheart:
let sfcGamepad = sfc.setSFC(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2
)
let getpresskeylist = sfcGamepad.cachePressedKeyList(
)
player = game.createSprite(0, 0)
