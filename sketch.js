const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

function preload(){
	bg=loadImage("bob2.jpg");
}

function setup() {
		canvas =createCanvas(windowWidth/2,windowHeight/1.5);

		engine = Engine.create();
		world = engine.world;

		let canvasmouse=Mouse.create(canvas.elt);
		canvasmouse.pixelRatio=pixelDensity();
		let op={
			mouse:canvasmouse
		}

		mConstraint=MouseConstraint.create(engine,op);
		World.add(world,mConstraint);

		//Create the Bodies Here.
		ball1=new ball(660,300,40);
		ball5=new ball(500,300,40);
		ball3=new ball(580,300,40);
		ball4=new ball(620,300,40);
		ball2=new ball(540,300,40);

		wall1=new wall(580,50,220,20);
		
		rope1=new rope(ball5.body,wall1.body,-80,0)
		rope2=new rope(ball1.body,wall1.body,80,0)
		rope3=new rope(ball4.body,wall1.body,40,0)
		rope4=new rope(ball3.body,wall1.body,0,0)
		rope5=new rope(ball2.body,wall1.body,-40,0)
	}

function draw() {
	background(bg);
	Engine.update(engine);

	wall1.show();

	fill("blue");
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
   }                             

function mouseDragged(){
	   Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
	}
