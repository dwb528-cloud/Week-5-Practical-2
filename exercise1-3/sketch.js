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
    fill(0);
    rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    if (keyIsPressed) {
        playerMove();
    }
    }

function playerMove() {
   if (key === 'w' && canMove(0, -1)) {
    player.y--;
   }
    if (key === 'a' && canMove (-1, 0)) {
        player.x--;
    }
    if (key === 's' && canMove (0, 1)) {
         player.y++;
    }
    if (key === 'd' && canMove (1, 0)) {
           player.x++;
    }
}

/**
 * @param {number} xDir -1 = left; +1 = right; 0 otherwise
 * @param {number} yDir -1 = down; +1 = up; 0 otherwise
 */

function canMove(xDir, yDir) {
    let newX = player.x + xDir;
    let newY = player.y + yDir;
    return newX + player.size <= obstacle.x || newX >= obstacle.x + obstacle.width || newY + player.size <= obstacle.y || newY >= obstacle.y + obstacle.height;
}