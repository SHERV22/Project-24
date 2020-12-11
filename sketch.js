
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	var ground,paper1,left,right,bottom;

	function preload()
	{
	
	}

	function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	paper1 = new Paper(100,650,80);
	left = new Dustbin(600,650,20,100);
	right = new Dustbin(700,650,20,100);
	bottom =  new Dustbin(650,670,100,20);

	Engine.run(engine);
  
	}


	function draw() {
	rectMode(CENTER);
	background(0);
  
 	ground.display();
 	paper1.display;
 	left.display();
 	right.display();
 	bottom.display();
  
 
	}

	function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:20,y:-20})
	
	}
	}


