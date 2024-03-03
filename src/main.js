import kaboom from "kaboom"


const k = kaboom()
k.loadSprite('bean', 'sprites/bean.png')
/*const levels = [
    [
        "##########",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "#        #",
        "##########",
    ],
]
const level = addLevel(levels[levelIdx], {
    tileWidth: 64,
    tileHeight:64,
    pos: vec2(64,64),
    tiles: {
        "#": () => [
            sprite("bean"),
            area(),
            anchor("center"),
        ],
    },
})*/

const speed = 300
let cul = 0
let ters = 3
let acqd = 0

const player = add([
    sprite("bean"),
    area(),
    pos(100,200),
    anchor("center"),
    "player",
])
//const playera = level.get("player")[0]
let BULLET_SPEED = 600
const spawnBullet = (p, d) => {
    if (cul == 0) {
	    add([
		    circle(12),
		    area(),
		    pos(p),
		    anchor("center"),
		    color(255, 0, 0),
		    outline(4),
		    move(d, BULLET_SPEED),
		    offscreen({ destroy: true }),
		    // strings here means a tag
		    "bullet",
	    ]);
	    cul = ters;
	}
}
loop(0.2, () => {
    if (cul > 0){
        cul -= 1
    }
})
loop(0.2, () => {
    if ( acqd > 0){
        acqd -= 1
    }
})
onKeyDown("a", () => {
    player.move(-speed, 0)
    player.angle = 90
})
onKeyDown("d", () => {
    player.move(speed, 0)
    player.angle = 270
})
onKeyDown("s", () => {
    player.move(0,speed)
    player.angle = 0
})
onKeyDown("w", () => {
    player.move(0,-speed)
    player.angle = 180
})
onKeyDown("space", () => {
    if ( acqd == 0 ){
        acqd = 10
        ters = 1
        wait(0.4, () => {
            ters = 6
        })
    }
})
onKeyDown("left", () => {
    player.angle = 90
    spawnBullet(player.pos.sub(-16, 0),LEFT)
    cul 
})
onKeyDown("right", () => {
    player.angle = 270
    spawnBullet(player.pos.sub(16, 0),RIGHT)
})
onKeyDown("up", () => {
    player.angle = 180
    spawnBullet(player.pos.sub(0, 16),UP)
})
onKeyDown("down", () => {
    player.angle = 0
    spawnBullet(player.pos.sub(0, -16),DOWN)
})
