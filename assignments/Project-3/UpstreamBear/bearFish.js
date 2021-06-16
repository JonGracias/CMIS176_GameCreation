/*Jonathan Gracias
  warGame.js
  04/19/2021
  This file creates the sprites for the game*/

function Fish(){
    tFish = new Sprite(scene, "fish.png", 100, 75);
    tFish.setSpeed(10);
    tFish.changeAngleBy(90);
    tFish.reset = function (){
        newX = Math.random() * this.cWidth;
        this.setPosition(newX, 50);
    }
    tFish.reset();
    return tFish;
}

function Bear() {
    tBear = new Sprite(scene, "Bear.png", 75, 150);
    tBear.setPosition(400, 550)
    tBear.maxSpeed = 15;
    tBear.minSpeed = 0;
    tBear.setAngle(90);
    tBear.setSpeed(0);
    
    tBear.checkKeys = function(){
        if (keysDown[K_RIGHT]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if (keysDown[K_LEFT]){
            this.changeSpeedBy(-1);
            if (this.speed > this.minSpeed){
                this.setSpeed(this.minSpeed);
            }
        }
    }
    return tBear;
}

function Net() {
    tNet = new Sprite(scene, "bar.png", 800, 20);
    tNet.setSpeed(0);
    tNet.setPosition(400, 590)
    return tNet;
    
}