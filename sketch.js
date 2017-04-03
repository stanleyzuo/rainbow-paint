var colors = [[255], [255,0,0], [255,127,0], [255,255,0], [0,255,0], [0,0,255], [75,0,130], [139,0,255]];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  if (keyIsPressed === true) {
    clear();
    }
  ellipse(mouseX, mouseY, 50, 50);
  fill(colors[index]);
  noStroke();
}

function mousePressed() {
  index = index + 1;

  if (index == colors.length) {
    index = 0;
  }
}