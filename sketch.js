var wall, car;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = "green";
  wall.debug = true;
  car = createSprite(400,200,80,30);
  car.shapeColor = "green";
  car.debug = true;
}

function draw() {
  background(0,0,0);  
  car.velocityX = speed;
  car.velocityY =speed;

  if (car.x - wall.x < wall.width/2 + car.width/2) {
    car.shapeColor = "red";
    wall.shapeColor = "red";
  }
  else {
    car.shapeColor = "green";
    wall.shapeColor = "green";
  }
  drawSprites();
}
