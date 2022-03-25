
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var inferior, superior, direita, esquerda;
let engine;
let world;
var bola
var quadrado
var retangulo
var ground

function preload()
{



}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	var bolaopçoes ={
		restitution:0.95
		
	}

var quadradoopcoes ={
	restitution:0.1
	
}

var retanguloopcoes ={
	restitution:1.0}



	
	
	bola=Bodies.circle(200,100,20,bolaopçoes)
  World.add (world,bola)

  quadrado=Bodies.rectangle(100,90,20,20,quadradoopcoes)
  World.add (world,quadrado)

  retangulo=Bodies.rectangle(150,80,20,80,retanguloopcoes)
  World.add (world,retangulo)
  ground= new Ground(200,398,400,20);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("green");
  Engine.update(engine);
  ellipse(bola.position.x,bola.position.y,20)
  rect(retangulo.position.x,retangulo.position.y,20,20)
  rect(quadrado.position.x,quadrado.position.y,20,20)
ground.show();



  drawSprites();
 
}



