/*Jonathan Gracias
  warGame.js
  04/19/2021
  This file contains the library for Upstream Bear. It controls the games functionality*/
  
var scene;
var net;
var bear;
var fish;
var scoreBoard;
var hits;
var numFishes = 3;
var MAXTIME = 20;
var timer;
var time;

function init() {
    scoreBoard = document.getElementById("scoreBoard");
    hits = 0;
    timer = new Timer();
    scene = new Scene();
    scene.setBG("blue")
    net = new Net();
    bear = new Bear();
    bear.setBoundAction(STOP)
    setupFishes();
    scene.start();
    console.log(scene)
    
} 

function update() {
    scene.clear();
    checkTime();
    bear.checkKeys();
    net.update();
    bear.update();
    for (i = 0; i < numFishes; i++){
        checkCollisions(i);
        fishes[i].update();
    }
}

function setupFishes() {
    fishes = new Array(numFishes);
    for (i = 0; i < numFishes; i++ ) {
        fishes[i] = new Fish();
    }
}

function checkCollisions(fishNum) {
    if (bear.collidesWith(fishes[fishNum])){
        fishes[fishNum].hide();
        hits += 1;
        updateScore();
            if(fishNum - 1 == 0) {
                console.log("array is empty");
                setupFishes();
                numFishes++;
            }
    } else if (net.collidesWith(fishes[fishNum])){
        fishes[fishNum].checkBounds(DIE);
        setupFishes();
        numFishes++;
    }
}

function updateScore(){
    scoreBoard.innerHTML = "Hits: " + hits + ". Time:  " + time;
}

function checkTime(){
    time = timer.getElapsedTime();
    if (time > MAXTIME) {
        scene.stop();
    } 
    updateScore();
}

function restart(){
    document.location.href = " ";
} 

