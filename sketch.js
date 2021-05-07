const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, isling ;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
var polygon;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //base
    ground = new Ground(600,590,1200,30);
    
    //block bases
    ground1 = new Ground(450,450,326,10);
    ground2 = new Ground(900,350,250,10);

    // pyramid 1 (base)
    block1 = new Box(327,400,39,40);
    block2 = new Box(367,400,39,40);
    block3 = new Box(407,400,39,40);
    block4 = new Box(447,400,39,40);
    block5 = new Box(487,400,39,40);
    block6 = new Box(527,400,39,40);
    block7 = new Box(567,400,39,40);

    //pyramid 1 (3rd row from top)
    block8 = new Box (367,360,39,40);  
    block9 = new Box(407,360,39,40);
    block10 = new Box(447,360,39,40);
    block11 = new Box(487,360,39,40);
    block12 = new Box(527,360,39,40);
    //pyramid 1 (2nd row from top)
    block13 = new Box(407,320,39,40);
    block14 = new Box(447,320,39,40);
    block15 = new Box(487,320,39,40);

    // pyramid 1 (top)
    block16 = new Box(447,275,37,40);
    
    //pyramid 2 (base)
    block1a = new Box(815,325,39,40);
    block2a = new Box(855,325,39,40);
    block3a = new Box(895,325,39,40);
    block4a = new Box(935,325,39,40);
    block5a = new Box(975,325,39,40);

    //pyramid 2 (middle)
    block6a = new Box(855,285,39,40);
    block7a = new Box(895,285,39,40);
    block8a = new Box(935,285,39,40);

    //pyramid 2(top)
    block9a = new Box(895,245,39,40);

    polygon = new Polygon(200,200,20,20);
    isling = new SlingShot(polygon.body,{x:200,y:200});
}

function draw(){
    
        background(0);
    
        noStroke();
        textSize(15)
        fill("white")
        text("pull the polygon to launch towards the pyramids", width-600, 50)
    
        
        Engine.update(engine);
    //strokeWeight(4);

       
         ground.display();
         ground1.display();
         ground2.display();
         fill("red");
         
         //pyramid 1
         block1.display();
         block2.display();
         block3.display();
         block4.display();
         block5.display();
         block6.display();
         block7.display();
         fill("orange");
         block8.display();
         block9.display();
         block10.display();
         block11.display();
         block12.display();
         fill("yellow");
         block13.display();
         block14.display();
         block15.display();
         fill("blue");
         block16.display();
         
        //pyramid 2
        fill("green");
        block1a.display();
        block2a.display();
        block3a.display();
        block4a.display();
        block5a.display();
        fill("pink");
        block6a.display();
        block7a.display();
        block8a.display();
        fill("purple");
        block9a.display();

        polygon.display();
        isling.display();
        

    }

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    isling.fly();
    gameState = "launched";
}



