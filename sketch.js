var backgroundimg
var iss,issimg;
var spacecraft,scimg,scimg1;
var sci2,sci3;
function preload(){
  backgroundimg=loadImage("img/spacebg.jpg")
  issimg=loadImage("img/iss.png")
  scimg=loadImage("img/spacecraft2.png")
  scimg1=loadImage("img/spacecraft3.png")
  scimg2=loadImage("img/spacecraft4.png")
  scimg3=loadImage("img/spacecraft1.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  spacecraft=createSprite(windowWidth-40,windowHeight-90);
  spacecraft.addImage(scimg3)
  spacecraft.scale=0.5
  iss=createSprite(400,200);
  iss.addImage(issimg)

}

function draw() {
  background(backgroundimg); 
   //iss.debug = true;
   spacecraft.setCollider("circle",0,0,200);
   iss.setCollider("circle",0,0,150);
  if(keyDown("up")){
    spacecraft.y=spacecraft.y-3
  }
  if(keyDown("down")){
    spacecraft.y= spacecraft.y+3
    spacecraft.addImage(scimg)
  }
  if(keyDown("left")){
    spacecraft.x= spacecraft.x-3
    spacecraft.addImage(scimg1)
  }
  if(keyDown("right")){
    spacecraft.x= spacecraft.x+3
    spacecraft.addImage(scimg2)
  } 
  if (spacecraft.isTouching(iss) ){
    textSize(25);
    fill("white");
    text("DOCKING SUCCESSFUL",800,500)
  }
  
  drawSprites();
}