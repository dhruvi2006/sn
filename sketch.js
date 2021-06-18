const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgimg;
var snow;

function preload(){
  bgimg = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
 
 // engine = Engine.create();
 

  
  //createSprite(400, 200, 50, 50);
}

function draw() {
 
  
  background(bgimg); 
  Engine.update(engine); 

  snow = new Snow(200,10,10,10);

  
  snow.display();
 
}