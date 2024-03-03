import kaboom from "kaboom"

const k = kaboom()
k.loadSprite('bean', 'sprites/bean.png')

const speed = 300

const player = add([
    sprite("bean"),
    area(),
    pos(100,200),
    anchor("center"),
])
const BULLET_SPEED = 1200
function spawnBullet(p, d) {
	add([
		rect(12, 48),
		area(),
		pos(p),
		anchor("center"),
		color(127, 127, 255),
		outline(4),
		move(d, BULLET_SPEED),
		offscreen({ destroy: true }),
		// strings here means a tag
		"bullet",
	])
}
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
onKeyDown("left", () => {
    player.angle = 90
    spawnBullet(player.pos.sub(-16, 0),LEFT)
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
k.onClick(() => k.addKaboom(k.mousePos()))
