let x1;
let x2;
let y1;
let y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = windowWidth / 2;
  x2 = windowWidth / 2 + 5;
  y1 = windowHeight / 2;
  y2 = windowHeight / 2;
}

function draw() {
  text(x1+", "+y1+", "+x2+", "+y2, 20, 20)
  strokeWeight(random(4, 7));
  stroke(200);
  line(x1, y1, x2, y2);

  x1 = x2;
  y1 = y2;

  x2 = random(windowWidth);
  y2 = random(windowHeight);
  
}

function mousePressed() {
  noLoop()
}
