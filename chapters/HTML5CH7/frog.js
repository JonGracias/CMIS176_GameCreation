var scene;
var forg;
var leaves;

function init(){
    scene = new Scene();
    scene.setBG("green");
    frog = new Frog();
    leaves = new Sprite(scene, "leaves.png", 640, 480);
    leaves.setSpeed(0);
    scene.start();
}

function update(){
    scene.clear();
    leaves.update();
    frog.checkKeys();
    frog.update();
}// end update

