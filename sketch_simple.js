let prevX;
let prevY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {}

function mousePressed() {
  for (let i = 0; i < 3; i++) {
    strokeWeight(random(5,10))
    stroke(
      random(mouseX % 255),
      random(mouseY % 255),
      random((windowWidth - mouseX) % 255)
    );
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
