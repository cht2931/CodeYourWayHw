let a=0
let ballx 
let bally 
let ballxSpeed
let ballySpeed
let bullety
let bulletySpeed

let bullets = [];

let BlasterHit;
let BlasterShot;

function setup() {
  createCanvas(800, 800);
  ballx = random(width);
  bally = random(width);
  ballxSpeed = 5;
  ballySpeed = 5;

  BlasterHit = loadSound('BlasterHit.wav');
  BlasterShot = loadSound('BlasterShot.wav');
}

function draw() {
  bulletySpeed = 5;

  R = map(mouseX, 0, 600, 0, 6);
  saberX = mouseX;
  saberY = mouseY - 310;
  saberWidth = 45;
  saberHeight = 520;
  doubleEdgeB = mouseY + 310;

  background(220);
  rectMode(CENTER);

  switch (a) {
    case 0:
      LightSaberG();
      Arm();
      bouncingBall();
      break;
    case 1:
      doubleEdge();
      Arm();
      bouncingBall();
      break;
    case 2:
      FourSaber();
      ArmFour();
      bouncingBall();
      break;
    case 3:
      BlasterGun();
      Arm();
      break;
  }

  strokeWeight(30);

  print(a);
}

function Arm() {
  let x = map(mouseX, 0, width, 0, 600);
  let y = map(mouseY, 0, height, 500, 800);

  stroke(30);
  line(0, 800, x, y);
  line(x, y, mouseX, mouseY);
}

function ArmFour() {
  let x = map(mouseX, 0, width, 0, 600);
  let y = map(mouseY, 0, height, 500, 800);

  let x2 = map(mouseX, 0, width, 200, 800);
  let y2 = map(mouseY, 0, height, 500, 800);

  stroke(30);

  // Top Left
  line(-20, 400, x - 120, y - 250);
  line(x - 120, y - 250, mouseX - 120, mouseY - 150);

  // Top Right
  line(820, 400, x2 + 120, y2 - 250);
  line(x2 + 120, y2 - 250, mouseX + 120, mouseY - 150);

  // Bottom Left
  line(-20, 800, x - 200, y + 100);
  line(x - 200, y + 100, mouseX - 200, mouseY + 150);

  // Bottom Right
  line(820, 800, x2 + 200, y2 + 100);
  line(x2 + 200, y2 + 100, mouseX + 200, mouseY + 150);
}

function LightSaberG() {
  let R = map(mouseX, 0, 600, 0, 6);
  let saberX = mouseX;
  let saberY = mouseY - 310;
  let saberWidth = 23;
  let saberHeight = 500;

  noStroke();

  // Saber
  fill(82, 255, 90);
  rect(mouseX, mouseY - 310, saberWidth, saberHeight, 30);

  // Saber Light
  fill(82, 255, 90, 120);
  rect(saberX, saberY, saberWidth, saberHeight, 30);

  // Hold
  fill(255);
  rect(mouseX, mouseY, 20, 120);

  // Hilt
  rect(mouseX, mouseY - 55, 60, 15);

  if (saberX - ballx < saberWidth && ballx - saberX < saberWidth && saberY - bally < saberHeight / 2 && bally - saberY < saberHeight / 2) {
    ballxSpeed = -ballxSpeed;
    BlasterHit.play();
  }
}

function doubleEdge() {
  let saberX = mouseX;
  let saberY = mouseY - 310;
  let saberWidth = 23;
  let saberHeight = 500;
  let doubleEdgeB = mouseY + 310;

  noStroke();
  fill(255);

  // Saber Top
  fill(237, 34, 93);
  rect(mouseX, mouseY - 310, saberWidth, saberHeight, 30);
  fill(237, 34, 93, 50);
  rect(saberX, saberY, saberWidth, saberHeight, 30);

  // Saber Bottom
  fill(237, 34, 93);
  rect(mouseX, mouseY + 310, saberWidth, saberHeight, 30);
  fill(237, 34, 93, 50);
  rect(saberX, doubleEdgeB, saberWidth, saberHeight, 30);

  // Hold
  fill(255);
  rect(mouseX, mouseY, 20, 120);

  // Hilt Top
  rect(mouseX, mouseY - 55, 60, 15);

  // Hilt Bottom
  rect(mouseX, mouseY + 55, 60, 15);

  // Check collision with top saber
  if (saberX - ballx < saberWidth && ballx - saberX < saberWidth && saberY - bally < saberHeight / 2 && bally - saberY < saberHeight / 2) {
    ballxSpeed = -ballxSpeed;
    BlasterHit.play();
  }

  // Check collision with bottom saber
  if (saberX - ballx < saberWidth && ballx - saberX < saberWidth && doubleEdgeB - bally < saberHeight / 2 && bally - doubleEdgeB < saberHeight / 2) {
    ballxSpeed = -ballxSpeed;
    BlasterHit.play();
  }
}

function FourSaber(){
  
  let saberTLx = mouseX - 120
  let saberTLy = mouseY - 460
  let saberTRx = mouseX + 120
  let saberTRy = mouseY - 460
  let saberBLx = mouseX - 200
  let saberBLy = mouseY - 160
  let saberBRx = mouseX + 200
  let saberBRy = mouseY - 160
  
  noStroke()
  
  //saber TL
  fill(82, 255, 90);
  rect(mouseX-120,mouseY-460,23,500,30)
  //saberLight TL
  fill(82, 255, 90,120);
  rect(saberTLx,saberTLy,saberWidth,saberHeight,30) 
  //hold TL
  fill(255);
  rect(mouseX-120,mouseY-150,20,120)
  //hilt TL
  rect(mouseX-120,mouseY-205,60,15)
  
  //saber TR
  fill(94, 193, 255);
  rect(mouseX+120,mouseY-460,23,500,30)
  //saberLight TR
  fill(94, 193, 255,120);
  rect(saberTRx,saberTRy,saberWidth,saberHeight,30) 
  //hold TR
  fill(255);
  rect(mouseX+120,mouseY-150,20,120)
  //hilt TR
  rect(mouseX+120,mouseY-205,60,15)
  
  //saber BL
  fill(94, 193, 255);
  rect(mouseX-200,mouseY-160,23,500,30)
  //saberLight BL
  fill(94, 193, 255,120);
  rect(saberBLx,saberBLy,saberWidth,saberHeight,30) 
  //hold BL
  fill(255);
  rect(mouseX-200,mouseY+150,20,120)
  //hilt BL
  rect(mouseX-200,mouseY+95,60,15)
  
  //saber BR
  fill(82, 255, 90);
  rect(mouseX+200,mouseY-160,23,500,30)
  //saberLight BR
  fill(82, 255, 90,120);
  rect(saberBRx,saberBRy,saberWidth,saberHeight,30) 
  //hold BR
  fill(255);
  rect(mouseX+200,mouseY+150,20,120)
  //hilt BR
  rect(mouseX+200,mouseY+95,60,15)

  
     if(saberTLx - ballx < 23 && ballx - saberTLx < 23 && saberTLy - bally < 260 && bally - saberTLy < 260)
  {
  ballxSpeed = -ballxSpeed;
    BlasterHit.play();
}
    if(saberTRx - ballx < 23 && ballx - saberTRx < 23 && saberTRy - bally < 260 && bally - saberTRy < 260)
  {
  ballxSpeed = -ballxSpeed;
    BlasterHit.play();
}
    if(saberBLx - ballx < 23 && ballx - saberBLx < 23 && saberBLy - bally < 260 && bally - saberBLy < 260)
  {
  ballxSpeed = -ballxSpeed;
    BlasterHit.play();
}
    if(saberBRx - ballx < 23 && ballx - saberBRx < 23 && saberBRy - bally < 260 && bally - saberBRy < 260)
  {
  ballxSpeed = -ballxSpeed;
    BlasterHit.play();
}
}

class Bullet {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    // this.x = this.x + random(-5, 5);
    this.y = this.y - 25;
  }

  show() {
    rectMode(CENTER)
    fill(255,0,0);
    noStroke();
    rect(this.x, this.y, 5,70);
  }
}

function BlasterGun() {
  if (keyIsPressed === true && key === 'b') {
    let b = new Bullet(mouseX+50,mouseY-120, 5,70);
    bullets.push(b);

    BlasterShot.play();  
  }

  bullets.forEach(bullet => {
    bullet.move();
    bullet.show();
  });
  
  if (bullets.length >= 50) {
    bullets.shift();
  }
  
  noStroke();
  fill(0);
  //scoup
  rect(mouseX + 93, mouseY - 30, 35, 80, 10);
  //gunMuzzle
  rect(mouseX + 50, mouseY - 170, 25, 50, 10);
  fill(255);
  //body
  rect(mouseX + 50, mouseY - 60, 50, 200, 10);
  //handle
  rect(mouseX, mouseY, 80, 40, 10);
}

function bouncingBall(){
  noStroke();
  fill(255,50,50);
  ellipse(ballx,bally,30);
  
  ballx += ballxSpeed;
  bally += ballySpeed;
  if (ballx > width - 5 || ballx < 5) {
    ballxSpeed = -ballxSpeed;
  }
  if (bally > height - 5 || bally < 5) {
    ballySpeed = -ballySpeed;
  }
}

function mouseClicked() {
  a++;
  if (a > 3) {
    a = 0;
  }
}