
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3, bin,binImage;
var paper;
var ground;
function preload(){
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	rect1 = new Bin(1000,350,100,20);
	rect2 = new Bin(935,310,20,160);
	rect3 = new Bin(1065,310,20,160);
	paper = new Ball(150,200,70);
	ground = new Ground(600,390,1200,20);
	
	bin = createSprite(1000,310,40,40);
	bin.addImage(binImage);
	bin.scale = 0.5;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();

 drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

      Matter.Body.applyForce(paper.body,paper.body.position,{x:270,y:-250});

	}
}
	

