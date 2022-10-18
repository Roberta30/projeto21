const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ball;
var ground;
var p1;
var p2;
//var KeyPressed;
//var seta;

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(250,10,20,ball_options);
	World.add(world,ball);


	ground = new Ground(400,495,800,20);
	p1 = new Ground(700,450,20,70);
	p2 = new Ground(590,450,20,70);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(50);
	Engine.update(engine);
	
	ground.show();
	p1.show();
	p2.show();

	push();
	stroke("blue");
	fill("white"); 
	
	ellipse(ball.position.x,ball.position.y,30);
	pop();

}

function KeyPressed(){
	//if (Input.KeyPressed(Keys.up)) {
	if (KeyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position, {x: 0, y: -0.10});
	}
}


