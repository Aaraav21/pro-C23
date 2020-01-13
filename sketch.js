const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
box1=new Box(300,560,580,70);
box2=new Box(150,500,70,250);
box3=new Box(300,100,500,70);
box4=new Box(300,500,70,250);
box5=new Box(450,500,70,250);
box6=new Box(300,50,100,70);

   ground1=new Ground(300,580,600,20); 
   
   

}

function draw(){
    background("green");
    Engine.update(engine);
  box1.display();
   ground1.display();
   box2.display();
  
  
   box3.display();
   box4.display();
   
   box5.display();
  
   box6.display();

}
