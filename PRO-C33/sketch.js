const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

//declare the variables.
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var turn = 0;
var score = 0;

var ground;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  //call the function
  mousePressed();

  //create ground.
  ground = new Ground(width / 2, height, width, 20);

  //create divisions using array.
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  //create first row of plinko
  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  //create second row of plinko 
  for (var j = 25; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  //create third row of plinko
  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  //create fourth row of  plinko
  for (var j = 25; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }

}



function draw() {
  background("lightblue");

  //display the texts
  textSize(20)
  fill("blue")
  //score
  text("Score : " + score, 20, 30);
  //turns
  text("Turns completed : " + turn, 150, 30);

  //display the scores
  text("500", 25, 500);

  text("400", 100, 500);

  text("300", 175, 500);

  text("200", 275, 500);

  text("100", 350, 500);

  text("100", 425, 500);

  text("200", 500, 500);

  text("300", 590, 500);

  text("400", 660, 500);

  text("500", 750, 500);

  Engine.update(engine);

  //display the ground
  ground.display();

  //display the plinkos array
  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }

  //display the divisions array
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  //assigning the scores to the player.

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 600) {

      if (particle.body.position.x < 75 || particle.body.position.x > 725) {
        score = score + 500;
        particle = null;

        if (turn >= 5) gameState = "end";

      } else if (particle.body.position.x < 150 || particle.body.position.x > 650) {
        score = score + 400;
        particle = null;

        if (turn >= 5) gameState = "end";

      } else if (particle.body.position.x < 225 || particle.body.position.x > 575) {
        score = score + 300;
        particle = null;

        if (turn >= 5) gameState = "end";

      } else if (particle.body.position.x < 300 || particle.body.position.x > 500) {
        score = score + 200;
        particle = null;

        if (turn >= 5) gameState = "end";

      } else if (particle.body.position.x < 375 || particle.body.position.x > 425) {
        score = score + 100;
        particle = null;

        if (turn >= 5) gameState = "end";

      }
    }
  }
  if(gameState === "end"){
    textSize(100);
    fill("red");
    text("GAME OVER", 150, 170);
    textSize(20)
    text("Press space to play again!", 300, 50)
  }

}
//if the mouse is pressed a particle should be spawned.
function mousePressed() {
  if (gameState !== "end") {
    turn++
    particle = new Particle(mouseX, 10, 10);

  }
}
//press space to restart the game.
function keyPressed() {
  if (keyCode === 32) {
    gameState = "play";

    turn = 0;
    score = 0;
  }
}