var tHunter,tHunterImg


function preload(){
tHunterImg=loadAnimation("images/mario1.png","images/mario2.png","images/mario3.png")
backgroundImage = loadImage("images/background.jpg");

var invGround;



}

function setup() {
  createCanvas(800,400);


  ground = createSprite(0,00,800,400);
  ground.addImage("ground",backgroundImage);
  ground.x = ground.width /2;
  ground.scale=1.3;
  ground.velocityX=-4;
  tHunter=createSprite(84, 270, 50, 50);
 // backgroundImage = loadImage("background.jpg");
  tHunter.addAnimation("running",tHunterImg)
  tHunter.scale=0.5
  invGround = createSprite(100,380,400,20);
  invGround.visible=false;


}

function draw() {
  //background() 

  if (ground.x<150){
    ground.x=ground.width/2
  }
console.log(tHunter.y)  
  if (keyDown("space") && tHunter.y > 300){
    tHunter.velocityY=-12;
  }
  tHunter.velocityY+=0.8

  tHunter.collide(invGround)
  drawSprites();
}