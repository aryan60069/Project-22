var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;
var MyEngine , MyWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(1000, 580);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(110, 400);
	fairy.addAnimation("f",fairyImg);
	fairy.scale = 0.3;

    MyEngine = Engine.create();
	MyWorld = MyEngine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(MyWorld, starBody);
	
	Engine.run(MyEngine);
	fairyVoice.play();
}

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.y > 360 && starBody.position.y > 360){
	  Body.setStatic(starBody , true);
  }

  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x+5;
	}

	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x-5;
	}
}