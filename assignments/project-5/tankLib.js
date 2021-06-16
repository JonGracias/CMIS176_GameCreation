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


function Dragon() {
  tDragon = new Sprite(scene, "dragon_tank.png", 256, 416);
  tDragon.setSpeed(0);
  tDragon.setPosition(670,300);

  
  
  return tDragon;
}

function DragonHead(){
    tDragonhead = new Sprite(scene, "head_canon_top.png", 280, 120);
    tDragonhead.setSpeed(0);
    tDragonhead.setPosition(650,110);

    tDragonhead.bottomhead = new Sprite(scene, "head_cannon_bottom.png", 280, 120);

    tDragonhead.firebomb = function(dir){
      this.bottomhead.changeImgAngleBy(-5);
        if (this.bottomhead.getImgAngle() < 0) {
          this.bottomhead.setImgAngle(0);
          setTimeout(function () { tDragonfire.fire(dir) }, 125);       
    }
  }

    tDragonhead.dragonparts = function(){
      this.bottomhead.setPosition(this.x, this.y)
      this.bottomhead.update();
    }



    return tDragonhead;

}

  function DragonFire() {
    tDragonfire = new Sprite(scene, "dragon_fire.png", 100, 100);
    tDragonfire.loadAnimation(216, 108, 54, 54);
    tDragonfire.generateAnimationCycles();
    tDragonfire.renameCycles(new Array("Fireball", "Explosion"));
    tDragonfire.setAnimationSpeed(1000);
    tDragonfire.pauseAnimation();
    tDragonfire.setCurrentCycle("Fireball");

    tDragonfire.hide();
    tDragonfire.setBoundAction(DIE);

    tDragonfire.fire = function () {
      this.playAnimation
      this.setCurrentCycle("Explosion")
      this.setPosition(600, 100 );
      this.addVector(dir, 100)
      this.show();
    };
    return tDragonfire;
  }


  function Tank() {
    tTank = new Sprite(scene, "tank.png", 100, 100);
    tTank.loadAnimation(720, 480, 240, 160);
    tTank.generateAnimationCycles();
    tTank.renameCycles(new Array("Stopped", "Forwards", "Backwards"));
    tTank.setAnimationSpeed(1000);
    tTank.playAnimation();
    tTank.setCurrentCycle("Stopped");
    tTank.setSpeed(0);
    tTank.setPosition(50, 425);

    tTank.bullet = new Bullet(tTank);
    tTank.turret = new Sprite(scene, "turret.png", 112, 56);
    tTank.setBoundAction(STOP);
    tTank.turret.setBoundAction(STOP);

    tTank.checkKeys = function () {
      if (keysDown[K_LEFT]) {
        this.changeXby(-2);
        this.playAnimation();
        this.setCurrentCycle("Backwards")
      }

      if (keysDown[K_RIGHT]) {
        this.changeXby(2);
        this.playAnimation();
        this.setCurrentCycle("Forwards")
        this.update();
      } else {
        this.setCurrentCycle("Stopped")
      }



      //always move turrent with me.
      this.turret.setPosition(this.x + 80, this.y - 20)

      if (keysDown[K_UP]) {
        this.turret.changeImgAngleBy(-5);
        if (this.turret.getImgAngle() < 0) {
          this.turret.setImgAngle(0);
        }
      }


      if (keysDown[K_DOWN]) {
        this.turret.changeImgAngleBy(5);
        if (this.turret.getImgAngle() > 90) {
          this.turret.setImgAngle(90);
        }
      }

      if (keysDown[K_SPACE]) {
        this.bullet.fire();
      }

      this.bullet.checkGravity();
      this.bullet.update();
      this.turret.update();

    };

    return tTank;
  }

  function Bullet(owner) {
    tBullet = new Sprite(scene, "Bullet_sheet.png", 100, 100);
    tBullet.loadAnimation(216, 108, 54, 54);
    tBullet.generateAnimationCycles();
    tBullet.renameCycles(new Array("Bullet", "Explosion"));
    tBullet.setAnimationSpeed(1000);
    tBullet.pauseAnimation();
    tBullet.setCurrentCycle("Bullet");
    tBullet.owner = owner;
    tBullet.hide();
    tBullet.setBoundAction(DIE);


    tBullet.fire = function () {
      this.playAnimation
      this.setCurrentCycle("Bullet");
      this.setSpeed(40);
      this.setPosition(this.owner.x + 80, this.owner.y - 18);
      this.setMoveAngle(this.owner.turret.getImgAngle());
      this.show();
    };

    tBullet.checkGravity = function () {
      this.addVector(140, 1);
    };

    tBullet.explode = function () {
      this.setSpeed(40);
      this.addVector(5, 1)
      this.playAnimation();
      this.setCurrentCycle("Explosion")
      setTimeout(function () { tBullet.hide() }, 125);

    };


    return tBullet;
  }
