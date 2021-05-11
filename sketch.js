
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1=new paper(200,470,70)
	var render = Render.create(
		{ element: document.body,
			 engine: engine,
			  options: { width: 1600,
				 height: 700,
				  wireframes: false 
				} });

				Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
  

  keypressed();

}
function keypressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-7})
	}

}

