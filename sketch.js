
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var gameState="Play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(50,350,20,20)
  monkey.addAnimation("running",monkey_running)
monkey.scale=0.1

obstaclesGroup =new Group()
  FoodGroup= new Group ()
  
  
   score=0
  
ground=createSprite(200,380,800,10)
  ground.velocityX=-6
}

function draw() {
background("white")
  
if (gameState==="Play"){
    if (ground.x<0){
    ground.x=200
  }
  
  monkey.collide(ground)
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  text("score:"+ score,200,100)
if(obstaclesGroup.isTouching(monkey))
    {
      gameState="End"
    }
  
  if (FoodGroup.isTouching(monkey)){
    score=score+1
    FoodGroup.destroyEach()
  }
    
    
    
    
  spawnFood();
  spawnObstacles();
  drawSprites();
}
  if (gameState==="End"){
textSize(24)
  text("GAME OVER",200,200)
  }
}


function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,360,10,40);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage("image",obstacleImage)
    
              
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
 }
}
function spawnFood(){
 if (frameCount % 80 === 0){
   var banana = createSprite(400,160,10,40);
    banana.y = Math.round(random(50,300));
   banana.velocityX = -(6 + score/100);
   banana.addImage("Bimage",bananaImage)
    
              
    banana.scale = 0.1;
    banana.lifetime = 300;
    FoodGroup.add(banana);
 }
}




