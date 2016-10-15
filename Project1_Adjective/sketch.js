// The ADJECTIVE is "WHIMSICAL"

// Square values and speed
var rectX = -50;
var rectY = 0;
var speed = 1;

// Color variables for triShape function
var crimson, emerald, lilac, ocean

function setup() {
  createCanvas(600, 600);
  crimson = color(193, 39, 45);
  emerald = color(11, 211, 11);
  lilac = color(188, 131, 198);
  ocean = color(85, 138, 255);
}

function draw() {
  background(0);

  // These triangles form a pinwheel of sorts and are a function of triShape and move according to mouseX and mouseY. 
  push();
    translate(width/2, height/2);
    rotate(mouseY/100);
    triShape(0, 0, crimson);
  pop();
    push();
    translate(width/2, height/2);
    rotate(mouseY/50);
    triShape(0, 0, ocean);
  pop();
  push();
    translate(width/2, height/2);
    rotate(mouseX/100);
    triShape(0, 0, emerald);
  pop();
  push();
    translate(width/2, height/2);
    rotate(mouseX/50);
    triShape(0, 0, lilac);
  pop();

  // Moving Rectangle from side to side
  rectX += speed;
  rectMode(CORNER);

  // Top square
  noStroke();
  fill(rectX / 2, random(255), random(255));
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
    background(255);
  }
}

// Function for triangle
function triShape(triX, triY, triCol) {
  var x = triX;
  var y = triY;
  noStroke();
  fill(triCol);
  triangle(x, y, x + 100, y, x + 50, y + 50);
}
