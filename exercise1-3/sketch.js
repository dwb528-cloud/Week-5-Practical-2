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
    //draw player
    strokeWeight(0);
    fill(255, 0, 255);
    square(player.x, player.y, player.size);
    //moving player
    let oldPlayerX = player.x + player.size;
    let oldPlayerY = player.y + player.size;
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
    //check collision with obstacle
    if (player.x + player.size > obstacle.x && player.y + player.size > obstacle.y && player.x < obstacle.x + obstacle.width && player.y < obstacle.y + obstacle.height) {
        oldPlayerX = obstacle.x;
        oldPlayerY = player.y;
    }
    //draw obstacle
    fill(0);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }