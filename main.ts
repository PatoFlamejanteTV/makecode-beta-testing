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
// i dont KNOW IF THIS WOKRS 💜
/*
Btw if you have an controller that supports this
and it is worning or not, contact me in case its
working or not! :D
*/
let sfcGamepad = sfc.setSFC(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2
)
let getpresskeylist = sfcGamepad.cachePressedKeyList(
)
player = game.createSprite(0, 0) // goofy ahh spingle dingle brrr skbvidy dopdopdodpoyesyeyseys
