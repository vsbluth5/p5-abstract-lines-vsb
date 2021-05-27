let x1 = windowWidth / 2;
let x2 = windowWidth / 2 + 5;
let y1 = windowHeight / 2;
let y2 = windowHeight / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(32);
  text(x1+", "+y1+", "+x2+", "+y2, 20, 20)
  strokeWeight(random(4, 7));
  stroke(25);
  line(x1, y1, x2, y2);

  x1 = x2;
  y1 = y2;

  x2 = random(windowWidth);
  y2 = random(windowHeight);
}

function mousePressed() {}
