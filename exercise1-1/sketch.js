let rects = [];

function setup() {
    createCanvas(600, 600);
    createRects();
}

function draw() {
    background (253, 218, 13);
    drawRects();
    for (let i = 0; i < rects.length; i++) {
        if (i % 2) {
        fill (0);
    } else {
        fill (255);
    }
    }
}

function createRects() {
    for (let i = 0; i < 100; i++) {
        let randomrect = {
            x: random(0, 600),
            y: random(0, 600),
            w: random(5, 10),
            h: random(5, 10)
        }
        rects.push(randomrect);
    }
}

function drawRects() {
    for(let i in rects) {
        rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
    }
}

function keyPressed () {
    if (key === "SPACEBAR")
        
}