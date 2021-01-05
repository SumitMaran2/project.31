const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var DIVISIONHEIGHT = 300;



function setup() {
  createCanvas(480,750);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k += 80) {
    divisions.push(new Division(k, height-DIVISIONHEIGHT/2, 10, DIVISIONHEIGHT))
  }

  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 85, 10))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 185, 10))
  }
  for (var j = 40; j <= width; j+= 50) {
    plinkos.push(new Plinko(j, 285, 10))
  }
  for (var j = 15; j <= width - 10; j+= 50) {
    plinkos.push(new Plinko(j, 385, 10))
  }


  
  
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  
  
  divisions[0].display();
  divisions[1].display();
  divisions[2].display();
  divisions[3].display();
  divisions[4].display();
  divisions[5].display();
  divisions[6].display();

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if (frameCount % 60 == 0) {
    particles.push(new Particle(random(width / 2-10, width / 2+10), 10, 10));
    }
  

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
}