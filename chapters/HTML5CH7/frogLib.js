//frogLib.js
//Objects for frog game

function Fly(){
    tFly = new Sprite(scene, "fly.png", 50, 50);
    tFly.setSpeed(10);
    tFly.changeAngleBy(90);
    tFly.wriggle = function (){
        //change direction by some random amount
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir);
    }// end wriggle

    tFly.reset = function (){
        // set new random position
        newX = Math.random() * this.cWidth;
        this.setPosition(newX, 50);
        
    }// end reset

    tFly.reset();

    

    return tFly;
} // end Fly

function Frog() {
    
    tFrog = new Sprite(scene, "frog.png", 50, 50);
    tFrog.setPosition(400, 550)
    tFrog.maxSpeed = 5;
    tFrog.minSpeed = 0;
    tFrog.setAngle(90);
    tFrog.setSpeed(0);
    
    tFrog.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeSpeedBy(1);
            if (this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }// end if
        if (keysDown[K_RIGHT]){
            this.changeSpeedBy(-1);
            if (this.speed > this.minSpeed){
                this.setSpeed(this.minSpeed);
            }// end if
        }// end if
    }// end checkKeys

    

    return tFrog;
}// end setupFrog

function Net() {
    tNet = new Sprite(scene, "bar.png", 800, 20);
    tNet.setSpeed(0);
    tNet.setPosition(400, 590)
    return tNet;
    
}
