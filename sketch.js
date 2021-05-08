const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var ball, ballp;
var slingshot;

function preload()
{
  ballp = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+150, 300, 20);
  ground2 = new Ground(width/2+300, height/2-50, 200, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new Sling(this.ball, {x: 100, y: 200});

  block1 = new Block(width/2-230, height/2+120, 30, 40);
  block2 = new Block(width/2-200, height/2+120, 30, 40);
  block3 = new Block(width/2-170, height/2+120, 30, 40);
  block4 = new Block(width/2-140, height/2+120, 30, 40);
  block5 = new Block(width/2-110, height/2+120, 30, 40);
  block6 = new Block(width/2-80, height/2+120, 30, 40);
  block7 = new Block(width/2-50, height/2+120, 30, 40);
  block8 = new Block(width/2-20, height/2+120, 30, 40);
  block9 = new Block(width/2+10, height/2+120, 30, 40);
  block10 = new Block(width/2-215, height/2+80, 30, 40);
  block11 = new Block(width/2-185, height/2+80, 30, 40);
  block12 = new Block(width/2-155, height/2+80, 30, 40);
  block13 = new Block(width/2-125, height/2+80, 30, 40);
  block14 = new Block(width/2-95, height/2+80, 30, 40);
  block15 = new Block(width/2-65, height/2+80, 30, 40);
  block16 = new Block(width/2-35, height/2+80, 30, 40);
  block17 = new Block(width/2-5, height/2+80, 30, 40);
  block18 = new Block(width/2-200, height/2+40, 30, 40);
  block19 = new Block(width/2-170, height/2+40, 30, 40);
  block20 = new Block(width/2-140, height/2+40, 30, 40);
  block21 = new Block(width/2-110, height/2+40, 30, 40);
  block22 = new Block(width/2-80, height/2+40, 30, 40);
  block23 = new Block(width/2-50, height/2+40, 30, 40);
  block24 = new Block(width/2-20, height/2+40, 30, 40);
  block25 = new Block(width/2-185, height/2, 30, 40);
  block26 = new Block(width/2-155, height/2, 30, 40);
  block27 = new Block(width/2-125, height/2, 30, 40);
  block28 = new Block(width/2-95, height/2, 30, 40);
  block29 = new Block(width/2-65, height/2, 30, 40);
  block30 = new Block(width/2-35, height/2, 30, 40);
  block31 = new Block(width/2-170, height/2-40, 30, 40);
  block32 = new Block(width/2-140, height/2-40, 30, 40);
  block33 = new Block(width/2-110, height/2-40, 30, 40);
  block34 = new Block(width/2-80, height/2-40, 30, 40);
  block35 = new Block(width/2-50, height/2-40, 30, 40);
  block36 = new Block(width/2-155, height/2-80, 30, 40);
  block37 = new Block(width/2-125, height/2-80, 30, 40);
  block38 = new Block(width/2-95, height/2-80, 30, 40);
  block39 = new Block(width/2-65, height/2-80, 30, 40);
  block40 = new Block(width/2-140, height/2-120, 30, 40);
  block41 = new Block(width/2-110, height/2-120, 30, 40);
  block42 = new Block(width/2-80, height/2-120, 30, 40);
  block43 = new Block(width/2-125, height/2-160, 30, 40);
  block44 = new Block(width/2-95, height/2-160, 30, 40);
  block45 = new Block(width/2+220, height/2-80, 30, 40);
  block46 = new Block(width/2+250, height/2-80, 30, 40);
  block47 = new Block(width/2+280, height/2-80, 30, 40);
  block48 = new Block(width/2+310, height/2-80, 30, 40);
  block49 = new Block(width/2+340, height/2-80, 30, 40);
  block50 = new Block(width/2+370, height/2-80, 30, 40);
  block51 = new Block(width/2+235, height/2-120, 30, 40);
  block52 = new Block(width/2+265, height/2-120, 30, 40);
  block53 = new Block(width/2+295, height/2-120, 30, 40);
  block54 = new Block(width/2+325, height/2-120, 30, 40);
  block55 = new Block(width/2+355, height/2-120, 30, 40);
  block56 = new Block(width/2+250, height/2-160, 30, 40);
  block57 = new Block(width/2+280, height/2-160, 30, 40);
  block58 = new Block(width/2+310, height/2-160, 30, 40);
  block59 = new Block(width/2+340, height/2-160, 30, 40);

}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  drawSprites();
  ground1.display();
  ground2.display();
  fill(135, 205, 235);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill(255, 190, 200);
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  fill(65, 220, 210);
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  fill(130, 130, 130);
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  fill(135, 205, 235);
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  fill(255, 190, 200);
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  fill(65, 220, 210);
  block40.display();
  block41.display();
  block42.display();
  fill(130, 130, 130);
  block43.display();
  block44.display();
  fill(135, 205, 235);
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  fill(255, 190, 200);
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();
  fill(65, 220, 210);
  block56.display();
  block57.display();
  block58.display();
  block59.display();

  slingshot.display();

  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}