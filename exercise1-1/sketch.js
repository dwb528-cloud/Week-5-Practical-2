let rects = [];
let bgColour;

function setup() {
    createCanvas(600, 600);
    bgColour = randomColour();
    createRects();
}

function draw() {
    background(bgColour);
    //another way of writing this: for (let i in rects) {}
    for (let i = 0; i < rects.length; i++) {
        if (i % 2 === 0) {
        fill (0);
    } else {
        fill (255);
    }
    rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
    }
}

function createRects() {
    for (let i = 0; i < 100; i++) {
        let randomrect = {
            x: random(width),
            y: random(height),
            w: random(5, 10),
            h: random(5, 10)
        }
        rects[i] = randomrect;
    }
}

function keyPressed () {
    if (key === " ")
        bgColour = randomColour();
        createRects();
}

function randomColour() {
    return color(random(255), random(255), random(55));
}