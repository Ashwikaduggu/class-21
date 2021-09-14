
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wedge;
var ground;
var angle = 60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var wedge_options ={
     isStatic: true
   }
  
   wedge = Bodies.rectangle(100,200,100,20,wedge_options);
   World.add(world,wedge);
  
//create a ground
  ground = Bodies.rectangle(200,390,400,20,ground_options);
//add to world
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wedge,angle);
  push()
  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,100,20);
  pop()
  angle += 0.01;

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  rect(ground.position.x,ground.position.y,400,20);
  
  
}

