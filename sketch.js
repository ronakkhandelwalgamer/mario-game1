var bg,bgImage,ground,groundImage;
var mario,marioImage;
var obs1,obs2,obs3,obs4,p2,obstacle;
var coin,coinImage;
var coinGroup,obstacleGroup;
var coinSound;





function preload(){

bgImage=loadImage("bg 1.png");
groundImage=loadImage("ground2.png");

marioImage=loadAnimation("mario00.png","mario01.png","mario02.png","mario03.png");

obs1=loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");

p2=loadImage("pipe new.jpg");

coinImage=loadImage("coin.jpg");

coinSound=loadSound("checkPoint.mp3");



}

function setup(){
createCanvas(displayWidth,displayHeight);
//bg=createSprite(displayWidth/2,displayHeight/2);
//bg.addImage(bgImage);
//bg .velocityX=-6;
//bg.scale=3.3;


ground2=createSprite(displayWidth/2,displayHeight,displayWidth+250,10);
ground2.addImage(groundImage);
ground2.scale=2.3;
ground2.velocityX=-4;
ground2.visible=true;

mario=createSprite(20,height-120);
mario.addAnimation("running",marioImage);
mario.scale=2;
mario.collide(ground2);


coinGroup=new Group();
obstacleGroup=new Group();


}

function draw(){
    background(bgImage);
    if(ground2.x<0){
        ground2.x=ground2.width/2
    }
    spawnObstacle();
    spawnCoin();

    
    if(keyDown("space")){
        mario.velocityY=-8;
    }
    mario.velocityY=mario.velocityY+0.8;
    mario.collide(ground2);

    if(mario.isTouching(coinGroup)){
        coinGroup.destroyEach();

        coinSound.play();
        
            }

    


drawSprites();


}
function spawnObstacle(){
    if(frameCount%150===0){
    obstacle=createSprite(width,height-150)
    var rand=Math.round(random(1,3));
    if(rand===1){
        obstacle.addAnimation("running",obs1);
        obstacle.scale=1.5;
        obstacle.y=height-120;
    }
   
    else {
        obstacle.addImage(p2)
        obstacle .scale=0.5;
    }
    obstacle.velocityX=-3;
    obstacle.lifetime=500;

    obstacleGroup.add(obstacle);
   obstacle.depth=mario.depth;
   mario.depth=mario.depth+1;
}
}

function spawnCoin(){
    if (frameCount%320===0){
        coin=createSprite(width,height-300);
        coin.addImage(coinImage);
        coin.velocityX=-3;
        coin.y=Math.round(random(height-200,height-300));
        coin.scale=0.3;
        coinGroup.add(coin);
        coin.lifetime=500;
        

      
        
    }
}






