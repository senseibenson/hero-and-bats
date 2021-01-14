let mySprite: Sprite = null
let play = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(play)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(play)
game.onUpdateInterval(200, function () {
    mySprite = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(160, randint(0, 240))
    mySprite.setVelocity(-50, 0)
    mySprite.setFlag(SpriteFlag.DestroyOnWall, true)
})
