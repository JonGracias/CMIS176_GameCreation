var scene;
var Fly;
var output;

function init(){
    scene = new Scene();
    scene.setBG("green");
    output = document.getElementById("output");
    //createCar();
    fly = new Fly();
    scene.start();
}// end init

function update(){
    scene.clear();
    fly.wriggle();
    fly.update();
}// end update