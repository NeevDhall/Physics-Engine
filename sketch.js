const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  var Canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
var ground_opt = {
  isStatic: true
}
  ground = Bodies.rectangle(200,390,400,10, ground_opt)
World.add(world,ground)

var ball_opt = {
restitution: 1
}
ball = Bodies.circle(200,200,25,ball_opt);
World.add (world,ball)

console.log (ball)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 10)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 25, 25)
}