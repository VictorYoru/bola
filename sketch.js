var bola

function setup() {
  createCanvas(800,800);
  bola=createSprite(300,300,50,50)
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  bola.x=bola.x+5
}
if(keyIsDown(LEFT_ARROW)){
  bola.x=bola.x-5
}
if(keyIsDown(UP_ARROW)){
  bola.y=bola.y-5
}
if(keyIsDown(DOWN_ARROW)){
  bola.y=bola.y+5
}
  drawSprites();

}




