var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var plank1;//plank2,plank3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    
   
   
   
   
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	plank1=createSprite(400,650,200,20);
	plank1.shapeColor=color("red")
	plank2=createSprite(290,610,20,100);
	plank2.shapeColor=color("red")
	plank3=createSprite(490,610,20,100);
	plank3.shapeColor=color("red")
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody,plank1,plank2,plank3);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	 
    Matter.Body.isStatic= false
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	packageSprite.velocityY= 3.8
	
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



