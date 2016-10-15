// The ADJECTIVE is "WHIMSICAL"

// Square values and speed
var rectX = -50;
var rectY = 0;
var speed = 1;

// Color variables for pinwheel function
var crimson, emerald, lilac, ocean

function setup() {
  createCanvas(500, 500);
  crimson = color(193, 39, 45);
  emerald = color(11, 211, 11);
  lilac = color(188, 131, 198);
  ocean = color(85, 138, 255);
}

function draw() {
  background(0);

  // These triangles are a function of pinwheel and move according to mouseX and mouseY. 
  push();
  translate(width / 2, height / 2);
  rotate(mouseY / 100);
  pinwheel(0, 0, crimson);
  pop();
  push();
  translate(width / 2, height / 2);
  rotate(mouseY / 50);
  pinwheel(0, 0, ocean);
  pop();
  push();
  translate(width / 2, height / 2);
  rotate(mouseX / 100);
  pinwheel(0, 0, emerald);
  pop();
  push();
  translate(width / 2, height / 2);
  rotate(mouseX / 50);
  pinwheel(0, 0, lilac);
  pop();

  // Pressing the W key draws a circle at mouse location that changes change according to mouse location.
  if (key == 'w' || key == 'W') {
    stroke(lilac);
    noFill();
    ellipse(mouseX, mouseY, mouseX+1, mouseY+1);
  }
  
  // Pressing the S key draws the third vertex of the triangle at the mouse location
  if (key == 's' || key == 'S') {
    stroke(crimson);
    noFill();
    triangle(mouseX, mouseY, 20, 20, 20, 40);
  }
  
  // Pressing the A key draws a circle translated 40 to the right and 40 down from the mouse location that also resizes according to where the mouse is.
  if (key == 'a' || key == 'A') {
    stroke(ocean);
    noFill();
    push();
    translate(40, 40);
    ellipse(mouseX, mouseY, mouseX + 1, mouseX + 1);
    pop();
  }
  
  // Pressing the D key draws a rectangle that rotates around (0,0) and is affected by mouse location.
  if (key == 'd' || key == 'D') {
    stroke(emerald);
    noFill();
    push();
    rotate(mouseY/70);
    rectMode(CENTER);
    rect(mouseX, mouseY, 100, 100);
    pop();
  }


  // Moving Rectangle from side to side
  rectX += speed;
  rectMode(CORNER);

  // Top square
  noStroke();
  fill(rectX / 2, random(255), random(255));
  rect(rectX, rectY, 50, 50);

  // Matrix transformation for bottom square
  translate(0, 450)
  rect(rectX, rectY, 50, 50);

  // If rectX is greater than the width or less than -50, change direction
  if ((rectX > width) || (rectX < -50)) {
    speed *= -1;
  }
}

// Function for the pinwheel traigles
function pinwheel(pinX, pinY, pinCol) {
  var x = pinX;
  var y = pinY;
  noStroke();
  fill(pinCol);
  triangle(x, y, x + 100, y, x + 50, y + 50);
}
