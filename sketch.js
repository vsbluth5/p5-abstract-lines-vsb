let x1 = windowWidth/2;
let x2 = windowWidth/2+5;
let y1 = windowHeight/2;
let y2 = windowHeight/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < 3; i++) {
    strokeWeight(random(2,5))
    stroke(
      random(x2 % 255),
      random(y2 % 255),
      random((windowWidth - x2) % 255)
    );
    line(
      x1 + random(-10, 10),
      y1 + random(-10, 10),
      x2 + random(-10, 10),
      y2 + random(-10, 10)
    );
  } // end of fow-loop
  
  x1 = x2;
  y1 = y2;
  
  x2 = random(windowWidth)
  y2 = random(windowHeight)
}


function mousePressed() {
  
}
