let prevX;
let prevY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(25);
}

function mousePressed() {
  for (let i = 0; i < 3; i++) {
    line(
      prevX + random(-10, 10),
      prevY + random(-10, 10),
      mouseX + random(-10, 10),
      mouseY + random(-10, 10)
    );
  }
  prevX = mouseX;
  prevY = mouseY;
}
