var hr ,hrAngle ;
var min , minAngle;
var sec, secAngle;
var clkimg;
function preload(){
  clkimg = loadImage("clock.jpg");
}

function setup() {
  createCanvas(600,600);
 angleMode(DEGREES);
}

function draw() {
  background(clkimg);  
  translate(300,300)
  rotate(-90)

  hr = hour();
 min = minute();
 sec = second();


  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr %12,0,12,0,360);
  push();
    rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();

push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();

stroke(255,0,255)
point(0,0)

strokeWeight(10)
noFill()
stroke(255,0,0)
arc(0,0,590,590,0,secAngle)

stroke(0,255,0)
arc(0,0,580,580,0,minAngle)

stroke(0,0,255)
arc(0,0,560,560,0,hrAngle)


}
