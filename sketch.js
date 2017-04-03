var colors = [[255,0,0], [255,127,0], [255,255,0], [0,255,0], [0,0,255], [75,0,130], [139,0,255]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(135, 206, 235);
}

function draw() {
  if (keyIsPressed === true) {
    background(135,206,235);
    }
  for (var i = 0; i <7; i++) {
    fill(colors[i]);
    ellipse(mouseX, 20*i + mouseY, 50,50);
    noStroke();
  }
}
