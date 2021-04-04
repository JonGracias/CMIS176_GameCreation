
const cards = document.querySelectorAll(".thecard");
cards.forEach((card) => card.addEventListener("click", flipCard));
let pscore = 0;
let escore = 0;



var cardsArray = new Array();
cardsArray[0] = new Image();
cardsArray[0].src = 'res/images/clubs/clubs_0.png'; 
cardsArray[1] = new Image();
cardsArray[1].src = 'res/images/clubs/clubs_1.png'; 
cardsArray[2] = new Image();
cardsArray[2].src = 'res/images/clubs/clubs_2.png'; 
cardsArray[3] = new Image();
cardsArray[3].src = 'res/images/clubs/clubs_3.png'; 
cardsArray[4] = new Image();
cardsArray[4].src = 'res/images/clubs/clubs_4.png'; 
cardsArray[5] = new Image();
cardsArray[5].src = 'res/images/clubs/clubs_5.png'; 
cardsArray[6] = new Image();
cardsArray[6].src = 'res/images/clubs/clubs_6.png'; 
cardsArray[7] = new Image();
cardsArray[7].src = 'res/images/clubs/clubs_7.png'; 
cardsArray[8] = new Image();
cardsArray[8].src = 'res/images/clubs/clubs_8.png'; 
cardsArray[9] = new Image();
cardsArray[9].src = 'res/images/clubs/clubs_9.png'; 
cardsArray[10] = new Image();
cardsArray[10].src = 'res/images/clubs/clubs_10.png'; 
cardsArray[11] = new Image();
cardsArray[11].src = 'res/images/clubs/clubs_11.png'; 
cardsArray[12] = new Image();
cardsArray[12].src = 'res/images/clubs/clubs_12.png'; 
var randomNum = Math.floor(Math.random() * cardsArray.length);


function start(){
   
    
    var playerNum = Math.floor(Math.random() * cardsArray.length);
    var enemyNum = Math.floor(Math.random() * cardsArray.length);
      
    var player = cardsArray[playerNum].outerHTML;
    var enemy = cardsArray[enemyNum].outerHTML;

    console.log(playerNum)
    console.log(cardsArray[playerNum])
    
    document.getElementById("player").innerHTML = player;
    document.getElementById("enemy").innerHTML = enemy;
    for(var i=0; i<cards.length;i++){
      cards[i].click();
    }
    result(playerNum, enemyNum); 
}

function flipCard() {
  this.classList.toggle("flip");
}

function resetCard() {
  for(var i=0; i<cards.length;i++){
    cards[i].click();
  }
}

function reset() {
  location = location;
}


function result(x, y){
  var x = x;
  var y = y;
  

  if(x == y) {
    console.log("Tie! Play again");
    var result = "Tie! No score."
  
  } else if( x > y ) {
    console.log("You Won!");
    var result = "You won!";
    pscore++;
 
  } else {
    console.log("You Lost..");
    var result = "You lost...";
    escore++;
   
  }
  document.getElementById("result").innerHTML= result;
  document.getElementById("pscore").innerHTML= "Player = " + pscore;
  document.getElementById("escore").innerHTML= "Computer = " + escore;

setTimeout(resetCard, 2000)
DisableEnable()
}

function DisableEnable() {
  document.getElementById("btn").disabled = true;
  setTimeout(function () { document.getElementById("btn").disabled = false; }, 2500);
}

