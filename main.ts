input.onPinPressed(TouchPin.P0, function () {
    player.change(LedSpriteProperty.Y, -speed) // yeah, it sometimes glitches and shows "0 - speed" instead of "-speed"
})
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -speed) // yeah, it sometimes glitches and shows "0 - speed" instead of "-speed"
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
// i dont KNOW IF THIS WOKRS ��
let sfcGamepad = sfc.setSFC(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2
)
let getpresskeylist = sfcGamepad.cachePressedKeyList(
)
player = game.createSprite(0, 0)
