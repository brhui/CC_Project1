/* The ADJECTIVE is "WHIMSICAL"

  CONTROLS:
    q = Make random triangles appear (one vertex tied to mouse location)
    w = Make two circle appear (shapes tied to mouse location)
    a = Make a circle and square appear (shapes tied to mouse location)
    s = Makes four triangles appear (one vertex tied to mouse location)
    d = Makes two squares appear and rotates around (0,0) */

// Square values and speed
var rectX = -50;
var rectY = 0;
var speed = 1;

// Color variables for pinwheel function
var crimson, emerald, lilac, ocean

// Array for circle size across the board
var ellipSize = [60, 50, 40, 30, 20, 10];
var ellipCol = [255, 225, 195, 165, 135, 105];

// Array for square values down the board
var rectSize = [65, 55, 45, 35, 25, 15];
var rectCol = [245, 215, 185, 155, 125, 95];

function setup() {
  createCanvas(500, 500);
  crimson = color(193, 39, 45);
  emerald = color(11, 211, 11);
  lilac = color(188, 131, 198);
  ocean = color(85, 138, 255);
  strokeWeight(3);
  noCursor();
}

function draw() {
  background(0);

  // Row of circles that move according to mouseY
  for (var i = 0; i < 6; i++) {
    push();
    stroke(ellipCol[i]);
    noFill();
    rotate(mouseY / 400);
    ellipse(i * 100 + 50, height / 4, ellipSize[i], ellipSize[i]);
    pop();
  }
  
  for (var u = 0; u < 6; u++) {
    push();
    stroke(rectCol[u]);
    noFill();
    scale(mouseX/300);
    rotate(mouseX/300)
    rectMode(CENTER);
    rect(375, u * 100 - 50, rectSize[u], rectSize[u]);
    pop();
  }

  // These triangles are a function of pinwheel and move according to mouseX and mouseY. 
  push();
  translate(width / 2, height / 2);
  push();
  rotate(mouseY / 100);
  pinwheel(0, 0, crimson);
  pop();
  push();
  rotate(mouseY / 50);
  pinwheel(0, 0, ocean);
  pop();
  push();
  rotate(mouseX / 100);
  pinwheel(0, 0, emerald);
  pop();
  push();
  rotate(mouseX / 50);
  pinwheel(0, 0, lilac);
  pop();
  pop();

  // Pressing the Q key draws triangles randomly between (0,0) and (200,200) with one point being the mouse location
  if (key == 'q' || key == 'Q') {
    stroke(247, 247, 30);
    noFill();
    triangle(mouseX, mouseY, random(200), random(200), random(200), random(200));
  }

  // Pressing the W key draws two circles at mouse location that changes change according to mouse location.
  if (key == 'w' || key == 'W') {
    stroke(lilac);
    noFill();
    ellipse(mouseX, mouseY, mouseX + 1, mouseY + 1);
    push();
    translate(-100, -150);
    ellipse(mouseX, mouseY, mouseX - 1, mouseY - 1);
    pop();
  }

  // Pressing the S key draws four triangles with the third vertex of the triangles at the mouse location
  if (key == 's' || key == 'S') {
    stroke(crimson);
    noFill();
    triangle(mouseX, mouseY, 50, 50, 50, 100);
    triangle(mouseX, mouseY, 450, 450, 450, 320)
    triangle(mouseX, mouseY, 450, 450, 450, 100);
    triangle(mouseX, mouseY, 50, 50, 50, 320)
  }

  // Pressing the A key draws a circle and a rectangle translated from the mouse location that also resizes according to where the mouse is.
  if (key == 'a' || key == 'A') {
    stroke(ocean);
    noFill();
    push();
    translate(40, 40);
    ellipse(mouseX, mouseY, mouseX + 1, mouseX + 1);
    translate(-100, 20);
    rect(mouseX, mouseY, mouseX + 1, mouseX + 1);
    pop();
  }

  // Pressing the D key draws two rectangle that rotates around (0,0) and is affected by mouse location.
  if (key == 'd' || key == 'D') {
    stroke(emerald);
    noFill();
    push();
    rotate(mouseY / 70);
    rectMode(CENTER);
    rect(mouseX, mouseY, 100, 100);
    translate(-100, -100)
    rect(mouseX, mouseY, 100, 100);
    pop();
  }

  // Moving Rectangle from side to side
  rectX += speed;

  // Top square
  rectMode(CORNER);
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
  triangle(x, y, x + 150, y, x + 50, y + 50);
}
