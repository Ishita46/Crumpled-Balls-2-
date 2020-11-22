
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper, dustbin, ground;
var world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,450,40);
	dustbin = new Dustbin(1200,650);
	ground = new Ground(width/2, 670, width, 20)

	var render = Render.create({
		element: document.body,
		engine:engine, 
		options:{
			width:600,
			height:700,
			wireframes:false
		}
	})
  Engine.run(engine)
  //Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background("WHITE");

  paper.display();
  ground.display();
  dustbin.display();
}

  function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	 }
	}