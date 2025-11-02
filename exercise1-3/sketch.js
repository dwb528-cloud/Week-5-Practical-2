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
    strokeWeight(0);
    fill(255, 0, 255);
    square(player.x, player.y, player.size);
    if (keyIsPressed === true) {
        if (key === 'w')
            player.y --;
    }
    if (keyIsPressed && key === 'a') {
        player.x --;
    }
    if (keyIsPressed && key === 's') {
         player.y ++;
    }
    if (keyIsPressed && key === 'd') {
           player.x ++;
    }
    fill(0);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}