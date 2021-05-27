let prevX = -1;
let prevY = -1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  stroke(255);
  line(prevX, prevY, mouseX, mouseY);
}

function mousePressed() {
  prevX = mouseX;
  prevY = mouseY;
}
