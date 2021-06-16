/*Jonathan Gracias
  Asteroids.js
  05/3/2021
  This file creates the sprites for the game*/

window.addEventListener(
  "keydown",
  function (e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  },
  false
);

function Asteroid() {
  let yPos = Math.random() * scene.height;
  let xPos = Math.random() * scene.width;
  tAsteroid = new Sprite(scene, "spriteSheet_large_asteroids.png", 64, 64);
  tAsteroid.setSpeed(3);
  tAsteroid.reset = function () {
    this.setPosition(xPos, yPos);
    this.addVector(Math.random() * 360, Math.random() * 3);
  }
  tAsteroid.reset();
  return tAsteroid;
}

function Ship() {
  tShip = new Sprite(scene, "spriteSheet_ship.png", 1, 1);
  tShip.loadAnimation(128, 192, 64, 64);
  tShip.generateAnimationCycles();
  tShip.renameCycles(new Array("noThrust", "thrust1", "reverseThrust"));
  tShip.setAnimationSpeed(500);
  tShip.setAngle(360);
  tShip.setSpeed(0);
  tShip.setPosition(250, 250);
  tShip.pauseAnimation();
  tShip.a = "noThrust"
  tShip.setCurrentCycle(tShip.a);

  tShip.bullet = new Bullet(tShip);

  tShip.checkKeys = function () {
    if (keysDown[K_LEFT]) {
      this.changeImgAngleBy(-5);
    }
    if (keysDown[K_RIGHT]) {
      this.changeImgAngleBy(5);
    }
    if (keysDown[K_UP]) {
      this.addVector(this.getImgAngle(), 0.1);
      tShip.playAnimation();
      tShip.setCurrentCycle("thrust1");
    }
    if (!keysDown[K_UP]) {
      tShip.playAnimation();
      tShip.setCurrentCycle("noThrust");
    }
    if (keysDown[K_DOWN]) {
      this.addVector(this.getImgAngle(), -0.1);
      tShip.playAnimation();
      tShip.setCurrentCycle("reverseThrust");
    }
    if (keysDown[K_SPACE]) {
      this.bullet.fire();
    }
    this.bullet.update();
  };

  tShip.reset = function () {
    this.setPosition(250, 250);
  };
  tShip.Setthrust1 = function() {
    tShip.setCurrentCycle("thrust1");
  }
  return tShip;
}


function Bullet(owner) {
  tBullet = new Sprite(scene, "bullet.png", 5, 5);

  tBullet.owner = owner;
  tBullet.hide();
  tBullet.setBoundAction(DIE);

  tBullet.fire = function () {
    this.setPosition(this.owner.x, this.owner.y);
    this.setMoveAngle(this.owner.getImgAngle());
    this.setSpeed(20);
    this.show();
  };
  return tBullet;
}
