/*Jonathan Gracias
  AsteroidsLib.js
  05/3/2021
  This file controls the functionality of Asteroids*/

var scene;
var ship;
var scoreBoard;
var hits;
var lives;
var numAsteroids = 2;

function init() {
  scoreBoard = document.getElementById("scoreBoard");
  hits = 0;
  lives = 3;
  scene = new Scene();
  scene.setBG("black");
  setupAsteroids();
  ship = new Ship();
  scene.start();
}

function update() {
  scene.clear();
  ship.checkKeys();
  ship.update();
  for (i = 0; i < numAsteroids; i++) {
    checkCollisions(i);
    asteroids[i].update();
  }
}

function setupAsteroids() {
  asteroids = new Array(numAsteroids);
  for (i = 0; i < numAsteroids; i++) {
    asteroids[i] = new Asteroid();
  }
}

function checkCollisions(asteroidsNum) {
  if (ship.bullet.collidesWith(asteroids[asteroidsNum])) {
    asteroids[asteroidsNum].hide();
    hits += 1;
    ship.a = "thrust1"
    updateScore();
    if (asteroidsNum - 1 == 0) {
      numAsteroids++;
      
    }
  } else if (ship.collidesWith(asteroids[asteroidsNum])) {
    ship.reset();
    lives -= 1;
    updateScore();
    if (lives - 1 == 0) {
      restart();
    }
  }
}

function updateScore() {
  scoreBoard.innerHTML = "Hits: " + hits + ". Lives: " + lives;
}

function restart() {
  document.location.href = " ";
}
