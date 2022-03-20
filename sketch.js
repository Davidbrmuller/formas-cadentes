
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

function preload()
{
	engine = Engine.create();	

	world = engine.world;



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



	
	Engine.run(engine);
	bola=Bodies.circle(200,100,20,bolaopçoes)
  World.add (world,bola)

  quadrado=Bodies.rectangle(100,90,20,quadradoopcoes)
  World.add (world,quadrado)

  retangulo=Bodies.rectangle(150,80,20,retanguloopcoes)
  World.add (world,quadrado)
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("green");
  Engine.update(engine);
  ellipse(bola.position.x,bola.position.y,20)
  rect(retangulo.position.x,retangulo.position.y,20,20)
  rect(quadrado.position.x,quadrado.position.y,20,20)
  inferior.show();
  superior.show();
  esquerda.show();
  direita.show();



  drawSprites();
 
}


function hforca(){
  Matter.Body.applyForce(bola, {x:0,y:0}, {x:0.05,y:0})}
  function hforca(){
	Matter.Body.applyForce(retangulo, {x:0,y:0}, {x:0.05,y:0})}
	function hforca(){
		Matter.Body.applyForce(quadrado, {x:0,y:0}, {x:0.05,y:0})}

