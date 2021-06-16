var scene;
var tank;
var rock;
var background;
var scoreBoard;
var MAXTIME = 20;
var timer;
var time;
var fireball;
var dragon;
var dragonlife = 100;




function init() {
  timer = new Timer();
  scoreBoard = document.getElementById("scoreBoard");
  scene = new Scene();
  background = new Sprite(scene, "background.png", 800, 550);
  background.setSpeed(0);
  background.setPosition(400, 275);
  tank = new Tank();
  rock = new Dragon();
  dragon = new DragonHead();
  fireball = new DragonFire();
  scene.start();
}

function update() {
  scene.clear();
  checkTime();
  background.update();  
  checkDistance();
  rock.update();
  dragon.update();
  dragon.dragonparts();
  tank.update();
  tank.checkKeys();
  fireball.update();
  checkCollisions();
  checkWin();
}

function checkTime(){
  time = timer.getElapsedTime();
  if (time > MAXTIME) {
    dir = tank.angleTo(fireball);
    dragon.firebomb(dir);

  } 
}

function checkDistance(){
  dist1 = tank.bullet.distanceTo(dragon); 
  dist = tank.bullet.distanceTo(rock);
  if(dist < 165 || dist1 < 150) {
    tank.bullet.explode();
  } 
}

function checkCollisions() {
  if (tank.bullet.collidesWith(rock)) {
      dragonlife -= 1;
      updateScore();

  } else if (tank.bullet.collidesWith(dragon)){
      dragonlife -=2
      updateScore();

  }else if(fireball.collidesWith(tank)) {
    scoreBoard.innerHTML = "You lost!";
      scene.stop();
  }
}

function checkWin() {
  if (dragonlife == 0){
    scoreBoard.innerHTML = "You win!";
    scene.stop();
  }
}

function updateScore() {
  scoreBoard.innerHTML = dragonlife;
}

function restart() {
  document.location.href = " ";
}
