var scene;
var net;
var frog;
var flies;
var leaves;
var ribbitMP3;
var ribbitOGG;
//var fly;
var scoreBoard;
var hits;
var numFlies = 3;
var MAXTIME = 20;
var timer;
var time;



function init() {
    scoreBoard = document.getElementById("scoreBoard");
    hits = 0;
    timer = new Timer();
    scene = new Scene();
    //fly = new Fly();
    net = new Net();
    leaves = new Sprite(scene, "leaves.png", 640, 480);
    leaves.setSpeed(0);
    leaves.setPosition(400, 240);
    frog = new Frog();
    ribbitMP3 = new Sound("ribbit.mp3");
    ribbitOGG = new Sound("ribbit.ogg");
    console.log(tNet);
    console.log(frog);
    
    
    setupFlies();
    scene.start();
} // end init

function update() {
    scene.clear();
    checkTime();
    frog.checkKeys();
    //fly.wriggle();
    //checkCollisions();
    net.update();
    leaves.update();
    frog.update();
    for (i = 0; i < numFlies; i++){
        //flies[i].wriggle();
        checkCollisions(i);
        flies[i].update();
    }// end loop
    //fly.update();
}// end update();

function setupFlies() {
    flies = new Array(numFlies);
    for (i = 0; i < numFlies; i++ ) {
        flies[i] = new Fly();
    }// end for 
}// end setupFlies

function checkCollisions(flyNum) {
    if (frog.collidesWith(flies[flyNum])){
        flies[flyNum].hide();
        flies[flyNum].setSpeed(0);
        ribbitMP3.play();
        ribbitOGG.play();
        hits += 1;
        updateScore();
    } else if (net.collidesWith(flies[flyNum])){
        flies[flyNum].checkBounds(DIE);
        setupFlies();
        numFlies++;
    }
}// end checkCollisions

function updateScore(){
    //update the scoreboard
    scoreBoard.innerHTML = "Hits: " + hits + ". Time:  " + time;
}// end updateScore

function checkTime(){
    time = timer.getElapsedTime();
    if (time > MAXTIME) {
        scene.stop();
    } // end if
    updateScore();
    
}// end checkTime

function restart(){
    document.location.href = " ";
} // end restart

