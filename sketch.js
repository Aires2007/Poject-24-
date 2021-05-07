const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(800,300,40);
    stone = new Stone(200,300,100,70)
    ironPellet1 = new Iron(400,300,7)
    ironPellet2 = new Iron(405,300,7)
    ironPellet3 = new Iron(410,300,7)
    ironPellet4 = new Iron(415,300,7)
    ironPellet5 = new Iron(420,300,7)
    ironPellet6 = new Iron(425,300,7)
    ironPellet7 = new Iron(430,300,7)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    ironPellet1.display();
    ironPellet2.display();
    ironPellet3.display();
    ironPellet4.display();
    ironPellet5.display();
    ironPellet6.display();
    ironPellet7.display();

    
 
}