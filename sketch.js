var car,wall;
var speed, weight;
var deformation=0;

function setup() {
  createCanvas(windowWidth,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(windowWidth-70,200,60,windowHeight/2);
  car.velocityX=speed;
  console.log(windowWidth+','+windowHeight);
}

function draw() {
  background(255,255,255);  
  if(car.isTouching(wall))
  {
      deformation=0.5*weight*speed*speed/22500;
      if(deformation<100)
      {
        car.shapeColor=rgb(0,255,0);   
             
      }
      else if(deformation>=100 && deformation <=180)
              {
                car.shapeColor=rgb(230,230,0);
              }
              else if(deformation>180)
                    {
                      car.shapeColor=rgb(255,0,0);
                    }
        car.velocityX=0;
        
  }
  drawSprites();
}