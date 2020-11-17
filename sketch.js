//----------------------------ProjectDetails---------------------------------

//ProjectName- nameBattleGround

//projectType- game

//last update- 11/14/2020

//by SauhardoSengupta
//-------------------------------------------------------------------------\\


//ground and groundImage...........
var Ground, GroundImg;

//player and edges....
var player;

//images....
var playerRightImg, playerLeftImg;

//health.....
var health = 100;

//platfoarm....
var platfoarm;

//groups.....
var enemyGroup;

//gameState.....
var gameState;

//bullet...
var bullets2;

//bullet...
var bullets1;

//BackgroundColor...
var col = "green";

//groups.....

var bulletGroup, bulletGroup2;

//gameState........
var gameState = 1;

//Sign
var signs;

var signs2;

var power_up;


function preload() 
{

  //preloadingImages.....

  GroundImg = loadImage("platfoarm/ground.png");
  playerRightImg= loadImage("charecters/sprite-0007.gif");
  playerLeftImg = loadImage("charecters/sprite-0008.gif");
  platfoarmImg  = loadImage("platfoarm/small.png");
  mountainImg   = loadImage("platfoarm/247474.png");

  longPlatfoarm = loadImage("platfoarm/groundGrass platfoarm-1.png");
  enemyImg  = loadImage("charecters/enemy2.png");
  enemyImg2 = loadImage("charecters/enemy.png");
  heartImg  = loadImage("platfoarm/heart.png");

  bulletImgRight= loadImage("platfoarm/bullet1.png");
  bulletImgLeft = loadImage(" platfoarm/bullet2.png");
  gameOverImg   = loadImage("platfoarm/gameOver.png");
  signsImg   = loadImage("platfoarm/sign.png");
  signImg    = loadImage("platfoarm/wsd.png");
  power_upImg= loadImage("platfoarm/heart.png");
  spaceImg   = loadImage("platfoarm/space.png");
   
  heal= loadSound('sound/heal.wav')
  shoot= loadSound('sound/shoot.wav')
}
function setup() {
   
  createCanvas(displayWidth, displayHeight - 140);

  //GroundSprite for player.....
  Ground = createSprite(200, displayHeight - 90, displayWidth - 800, 70);

  Ground.scale = 0.7;
  Ground.addImage(GroundImg);
  Ground.setCollider("rectangle", -40, -5, Ground.width, Ground.height + 100);
 
  //--------------------------Ground---------------------------------------\\
  enemyGroup   = new Group();
  bulletGroup2 = new Group();
  bulletGroup  = new Group();

  //longPlatfoarm.....

  longPlatfoarm1 = createSprite(2300, 400, 20, 20);
  longPlatfoarm1.addImage(longPlatfoarm);
  longPlatfoarm1.scale = 0.7;
  longPlatfoarm1.setCollider("rectangle", 0, 50, 2000, 200);

  //playerSprite.....

  player = createSprite(200, displayHeight - 400, 40, 70);
  player.addImage(playerRightImg);
  player.scale = 0.7

  player.setCollider("rectangle", -6, -4, 50, 160)

  //-------------------------CallingFunctions--------------------------------\\

  enemies();
  platfoarms();
  mountains();
  signs();
  power_ups()
}

function draw() {

  background("lightblue");
  
  console.log(player.y)

  //camera will follow player.......
  camera.position.x = player.x
  camera.position.y = player.y

  //up and down movement of platfoarm.......
  
  if (platfoarm2.y > 400) {

    platfoarm2.velocityY = -4

  }

  if (platfoarm2.y < 200) {

    platfoarm2.velocityY = 4
    
  }

  //playGame[gameState]...
  if (gameState == 1) {

    if (player.isTouching(enemy1)) 
    {

      health = health - 2

    }
   
    //=============================losingHealth(when touching enemy)============================
    if (player.isTouching(enemy2))
    {

      health = health - 2

    }
   //====================================MovementForPlayer==============================
    //left Movement.....
    if (keyDown("right"))
    {

      player.x = player.x + 16;
      player.addImage(playerRightImg);

    }

    //rightMovement....
    if (keyDown("left")) 
    {

      player.x = player.x - 16
      player.addImage(playerLeftImg)

    }

    //jumpMovement....
    if (keyDown("space")) 
    {

      player.velocityY = -20
     
    }

   
   //=================================ShootingTheEnemy==============================\\
   
    if (keyDown("a")) 
    {

      bullets1 = createSprite(200, 200, 40, 40)
      bullets1.x = player.x;
      bullets1.y = player.y;
      bullets1.velocityX = -8
      bullets1.addImage(bulletImgLeft);
      bullets1.scale = 0.3;
      bullets1.lifetime= 50;
      bulletGroup2.add(bullets1);
      shoot.play()
    }

    if (keyDown("d")) 
    {

      bullets2 = createSprite(200, 200, 40, 40)
      bullets2.x = player.x;
      bullets2.y = player.y;
      bullets2.velocityX = 8
      bullets2.addImage(bulletImgRight);
      bullets2.scale = 0.3;
      bullets2.lifetime= 50;
      bulletGroup.add(bullets2)
      shoot.play()
    }
   //===================================GameOver======================================
    if (health <= 0) 
    {

      gameState = 0
      
    }

   //gameOver[gameState]...
   if (gameState == 0) 
   {
    background("lightblue")
    player.x = 200
    player.y = displayHeight - 376
    gameOverSymbol()
    if(keyCode === UP_ARROW){

      gameState= 1
      health= 100
      
    }
   }
  }

  //-----------------------------------------moving function-----------------------
  if (enemy1.x < 1640) 
  {

    enemy1.velocityX = 8
    enemy1.addImage(enemyImg2)

  }

  if (enemy2.x < 1640) 
  {

    enemy2.velocityX = 8
    enemy2.addImage(enemyImg2)

  }

  if (enemy1.x > 2800) 
  {

    enemy1.velocityX = -8
    enemy1.addImage(enemyImg)

  }

  if (enemy2.x > 2800) 
  {

    enemy2.velocityX = -8
    enemy2.addImage(enemyImg)

  }

  if (enemy3.x < 1640) 
  {

    enemy3.velocityX = 8
    enemy3.addImage(enemyImg2)

  }

  if (enemy3.x > 2800) 
  {

    enemy3.velocityX = -8
    enemy3.addImage(enemyImg)

  }

  if(enemy5.x < 4900 ){

    enemy5.velocityX= 5
    enemy5.addImage(enemyImg2)

  }

  if(enemy5.x > 5700){

    enemy5.velocityX= -5
    enemy5.addImage(enemyImg)

  }

  if(enemy6.x < 4900 ){

    enemy6.velocityX= 5
    enemy6.addImage(enemyImg2)

  }

  if(enemy6.x > 5700){

    enemy6.velocityX= -5
    enemy6.addImage(enemyImg)

  }

  if (enemy7.x < 4900) 
  {

    enemy7.velocityX = 8
    enemy7.addImage(enemyImg2)

  }

  if (enemy7.x > 5700) 
  {

    enemy7.velocityX = -8
    enemy7.addImage(enemyImg)

  }

  //======================================HealthAlert=============================
  if (health <= 60) 
  {

    col = "red";

  }

  if(health == 100){

  col= "green"

  }
  
  //player should not escape the canvas
  if (player.x < 0) 
  {

    player.x = 200
    player.y = displayHeight - 360
  }

  if (player.y < -80) {

    player.velocityY = 0

  }

  //=========================killing enemy using bullets=========================
  if (enemy1.isTouching(bulletGroup)) 
  {
    enemy1.destroy()
  }

  if (enemy1.isTouching(bulletGroup2))
  {
    enemy1.destroy()
  }

  if (enemy2.isTouching(bulletGroup)) 
  {
    enemy2.destroy()
  }

  if (enemy2.isTouching(bulletGroup2)) 
  {
    enemy2.destroy()
  }

  if (enemy3.isTouching(bulletGroup)) 
  {
    enemy3.destroy()
  }

  if (enemy3.isTouching(bulletGroup2)) 
  {
    enemy3.destroy()
  }

  if(player.isTouching(bulletGroup))
  {

   health= health-1

  }

  if(player.isTouching(bulletGroup2))
  {

   health= health-1

  }

  //==========================================HowToPlay==========================================

  if(player.isTouching(Signs))
  {
    instruction();
  }

  if(player.isTouching(Signs2))
  {
  
    textSize(40)
    fill("black")
    text("Use the a key to shoot left and the d key to shoot right and also collect powerUps",displayHeight - 890,200);

  }

  if(player.isTouching(power_up)){
   
   power_up.destroy();
   health= health+10
   heal.play()
   
  }

  if(player.isTouching(power_up2)){
   
    power_up2.destroy();
    health= health+10
    heal.play()
   }

   if(player.isTouching(platfoarm8)){
     
     gameState= 2
   }
   
   if(gameState ===  2 ){

   background(0)
   textSize(60)
   fill("red")
   text("you Won",5000,200)


   }

   
  if(player.isTouching(power_up3)){
   
    power_up3.destroy();
    health= health+10
    heal.play()
  }

  if(player.isTouching(power_up4)){

   power_up4.destroy();
   health= health + 5;
    heal.play()
  }

  if(player.y > 800){

   player.x= 200
   player.y= displayHeight-360

  }

  if(player.isTouching(enemy4)){

    health= health -5

  }

  if(player.isTouching(enemy5)){

    health= health -5

  }

  if(player.isTouching(enemy6)){

    health= health -5

  }

  if(player.isTouching(enemy7)){

    health= health -5

  }

  if(enemy4.isTouching(bulletGroup)){

    enemy4.destroy()

  }

  if(enemy4.isTouching(bulletGroup2)){

    enemy4.destroy()

  }
  
  if(enemy5.isTouching(bulletGroup2)){

    enemy5.destroy()

  }

  if(enemy5.isTouching(bulletGroup)){  

    enemy5.destroy()

  }

  if(enemy6.isTouching(bulletGroup)){

    enemy6.destroy()

  }

  if(enemy6.isTouching(bulletGroup2)){

    enemy6.destroy()

  }

  if(enemy7.isTouching(bulletGroup)){

    enemy7.destroy()

  }

  if(enemy7.isTouching(bulletGroup2)){

    enemy7.destroy()

  }

  //gravity for player.......
  player.velocityY = player.velocityY + 1.9
 
  drawSprites();

  textSize(50)
  fill(col)
  text("health: " + health, player.x - 700, player.y - 300)

 //--------------------------CollideFunction-----------------------------\\

  player.collide(Ground);
  player.collide(platfoarm);
  player.collide(platfoarm2);
  player.collide(platfoarm3);
  player.collide(mountain);
  player.collide(longPlatfoarm1);
  player.collide(platfoarm4);
  player.collide(platfoarm5)
  player.collide(platfoarm6)
  player.collide(platfoarm7)
  player.collide(platfoarm8)
}


function platfoarms() {

  platfoarm = createSprite(640, 500, 400, 100)
  platfoarm.addImage(platfoarmImg);
  platfoarm.scale = 0.7
  platfoarm.setCollider("rectangle", 10, 20, 380, 160);

  platfoarm2 = createSprite(1300, 600, 400, 100)
  platfoarm2.addImage(platfoarmImg);
  platfoarm2.scale = 0.7
  platfoarm2.setCollider("rectangle", 10, 20, 380, 160)
  platfoarm2.velocityY = 4

  platfoarm3 = createSprite(889, 500, 400, 100)
  platfoarm3.addImage(platfoarmImg);
  platfoarm3.scale = 0.7
  platfoarm3.setCollider("rectangle", 10, 20, 380, 160)

  platfoarm4 = createSprite(3230, 450, 400, 100)
  platfoarm4.addImage(platfoarmImg);
  platfoarm4.scale = 0.8
  platfoarm4.setCollider("rectangle", 10, 20, 380, 160)

  platfoarm5 = createSprite(3800, 400, 400, 100)
  platfoarm5.addImage(platfoarmImg);
  platfoarm5.scale = 0.8
  platfoarm5.setCollider("rectangle", 10, 20, 380, 160)
  
  platfoarm6= createSprite(4200,300,10,10)
  platfoarm6.scale= 0.8
  platfoarm6.addImage(platfoarmImg)
  platfoarm6.setCollider("rectangle", 10, 20, 380, 160)

  platfoarm7= createSprite(5000,300,10,10)
  platfoarm7.scale= 0.8
  platfoarm7.addImage(longPlatfoarm);
  platfoarm7.setCollider("rectangle",-80,0,2200,90)

  platfoarm8= createSprite(6000,300,10,10)
  platfoarm8.scale= 0.8
  platfoarm8.addImage(platfoarmImg);
  platfoarm8.setCollider("rectangle",-80,0,2200,90)

}

//mountain to block..........
function mountains() {

  mountain = createSprite(-400, 500, 400, 700)
  mountain.addImage(mountainImg)
}

//enemies for player...........
function enemies() {

  enemy1 = createSprite(2300, 310, 40, 40);
  enemy1.addImage(enemyImg);
  enemy1.scale = 0.7
  enemy1.velocityX = -5

  enemy2 = createSprite(2000, 315, 40, 40);
  enemy2.addImage(enemyImg);
  enemy2.scale = 0.7;
  enemy2.velocityX = -5;

  enemy3 = createSprite(2000, 310, 40, 40);
  enemy3.addImage(enemyImg);
  enemy3.scale = 0.7;
  enemy3.velocityX = -4;

  enemy4= createSprite(3800,310,10,10)
  enemy4.addImage(enemyImg)
  enemy4.scale= 0.7
 
  enemy5= createSprite(4500,210,10,10)
  enemy5.addImage(enemyImg)
  enemy5.scale= 0.7
  enemy5.velocityX= -5

  enemy6= createSprite(4400,210,10,10)
  enemy6.addImage(enemyImg)
  enemy6.scale= 0.7
  enemy6.velocityX= -5

  enemy7= createSprite(4300,210,10,10)
  enemy7.addImage(enemyImg)
  enemy7.scale= 0.7
  enemy7.velocityX= -5

  enemyGroup.add(enemy1)
}

function gameOverSymbol() {

  gameOver = createSprite(200, 180, 10, 10)
  gameOver.addImage(gameOverImg)
  gameOver.scale = 0.3

}

function signs(){

Signs= createSprite(300,470,10,10)
Signs.addImage(signsImg)

Signs2= createSprite(700,390,10,10)
Signs2.addImage(signsImg)
Signs2.setCollider("rectangle",5,30,49,68)

}
function power_ups(){

  power_up= createSprite(800,400,10,10)
  power_up.addImage(power_upImg)

  power_up2= createSprite(2000,300,10,10)
  power_up2.addImage(power_upImg)

  power_up3= createSprite(2700,300,10,10)
  power_up3.addImage(power_upImg)
  
  power_up4= createSprite(3500,350,10,10)
  power_up4.addImage(power_upImg)
}

function instruction()
{

  textSize(60)
  fill("black")
  text("Press the arrow keys to move",displayHeight - 1000,200);

  textSize(60)
  fill("black")
  text("And use Space To Jump",displayHeight - 1291,300);
  control= createSprite(310,300,10,10)
  control.addImage(signImg)
  control.scale= 0.3
  
  space= createSprite(80,370,20,20)
  space.addImage(spaceImg)
  space.scale= 0.3

}