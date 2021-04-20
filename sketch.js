var hr,min,sec;
var secangle,minangle,hrsngle;


function setup() {
  createCanvas(400,400);



angleMode(DEGREES); 
}

function draw() {
  background("black"); 
  hr=hour();
min=minute();
sec=second();
translate(200,200);
rotate(-90);

secangle=sec*6
minangle=min*6
hrsngle=hr*15;

  push()
    
  
  rotate(secangle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop()

  push()

  
  rotate(minangle)
  stroke("lime");
  strokeWeight(7);
  line(0,0,60,0);
  pop()

  push()


  rotate(hrsngle)
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop()
  noFill();
  stroke("yellow");
  strokeWeight(10);
  arc(0,0,200,200,0,secangle);
  stroke("orange");
  arc(0,0,170,170,0,minangle);
  stroke("purple")
  arc(0,0,140,140,0,hrsngle);
}