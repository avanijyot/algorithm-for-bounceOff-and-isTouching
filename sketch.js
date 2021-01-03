var box1, box2

function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 100, 50, 50);
  box1.debug = true;
  box1.velocityY = 1;
  box2 = createSprite(400, 300, 50, 50);
  box2.debug = true;
  box2.velocityY = -1;
  
}

function draw() {
  background("red");  

  //box1.y = mouseY;
  //box1.x = mouseX;

  console.log(box1.x-box2.x);
  console.log(box1.width/2+box2.width/2);

  if(box1.x-box2.x<= box1.width/2+box2.width/2 && 
    box2.x-box1.x<=box1.width/2+box2.width/2 && 
    box1.y-box2.y<=box1.height/2+box2.height/2 && 
    box2.y-box1.y<=box1.height/2+box2.height/2 ){
    
    box1.velocityY = -box1.velocityY;
    box2.velocityY = -box2.velocityY;

    box1.shapeColor = "green";
    box2.shapeColor = "green";
  }else{
    box1.shapeColor = "grey";
    box2.shapeColor = "grey";
 
  }

  


  drawSprites();
}