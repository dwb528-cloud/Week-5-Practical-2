let player = {
    x: 50,
    y: 50,
    size: 50
}
let obstacle = {
    x: 150,
    y: 100,
    width: 100,
    height: 200
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    square(player.x, player.y, player.size);
}

function keyPressed(){
    if(key === "w") {
        player -= y
    }
}