const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
const Constraint = Matter.Constraint

var engine , world
var ground_img
var score = 0

function preload(){
ground_img = loadImage("1.jpg")
}

function setup() {
 
createCanvas(1200,800)
engine = Engine.create()
world = engine.world


object1  = new Ground(390,250,160,50)


block1 = new Block(700,400,10,100)
block2 = new Block(800,400,10,100)
block3 = new Block(750,460,110,10)

polygon1 = new Polygon(150,500,20)

slingShot = new SlingShot(polygon1.body,{x:400,y:250})

}

function draw() {
    background("yellow")
    text("Score : " + score,750,40)
    if(background)
 Engine.update(engine)
 block1.display()
 block2.display()
 block3.display()
 
 slingShot.display();
 polygon1.display();
 
}

function mouseDragged() {
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    slingShot.fly()
    
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(polygon1.body)
    }
}

