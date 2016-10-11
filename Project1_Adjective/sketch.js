// Square values and speed
var rectX = -50;
var rectY = 0;
var speed = 1;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {

  // Moving Rectangle from side to side
  rectX += speed;

  // Top square
  noStroke();
  fill(rectX/2, random(255), random(255));
  rect(rectX, rectY, 50, 50);

  // Matrix transformation for bottom square
  translate(0, 550)
  rect(rectX, rectY, 50, 50);

  // If rectX is greater than the width or less than -50, change direction
  if ((rectX > width) || (rectX < -50)) {
    speed *= -1;
  }

  // When any key is pressed, the background redraws.
  if (keyIsPressed) {
    background(0);
  }
}

function rectShape(rectX, rectY, rectCol) {

}