/*Jonathan Gracias
  warGame.js
  04/05/2021
  This file holds the javascript that makes the game work.
  I started knowing that I wanted to make the cards flip so I watched a 
  tutorial on youtube by Arjun Khara that helped me make it work using 
  CSS but I wanted it to work on two elements onclick. To make this work I used querySelector()
  to get a list of matching elements and then used an arrowfunction with a EventListener for a click on the item.
  The arrowfunction then calls on flipcard() that then performs a toggle on "this", that I attached
  to cards using css .flip classname. (dev.to tutorial Ricardo Moreira, Flip cards with Javascripts)
  To flip onclick I made a reset() that when called loops through an array of card elements and perfoms
  a "click" on both elements. I attached that to the start() function. 
  start() handles the choosing of the cards based on a random number and pass the cards value to checkWinner(). checkWinner() 
  checks if there is a winner if not it passes the card values to results which then adds the points and sends a 
  message to the player about the winner of the round.*/

  /*Extra credit -- 1. I think I handle the occurence of a tie by extending the game with the addition of points and the first to 3 points wins.
                    2. The cards include face cards. Thier value is assigned at creation of the cardsArray
                    3. All cards have both front and back images. Even the ones before the game actually starts. Before clicking flip, on the cards to see the joker card.
                    4. The page is fully styled as a virtual poker table! There is a hover for the buttons, multiple colors, and even unique card design. There is even a grand prize for the computer! */

const cards = document.querySelectorAll(".thecard");
cards.forEach((card) => card.addEventListener("click", flipCard));
let pscore = 0;
let escore = 0;
let rounds = 1;

var cardsArray = new Array();
cardsArray[0] = new Image();
cardsArray[0].src = "res/images/clubs/clubs_0.png";
cardsArray[1] = new Image();
cardsArray[1].src = "res/images/clubs/clubs_1.png";
cardsArray[2] = new Image();
cardsArray[2].src = "res/images/clubs/clubs_2.png";
cardsArray[3] = new Image();
cardsArray[3].src = "res/images/clubs/clubs_3.png";
cardsArray[4] = new Image();
cardsArray[4].src = "res/images/clubs/clubs_4.png";
cardsArray[5] = new Image();
cardsArray[5].src = "res/images/clubs/clubs_5.png";
cardsArray[6] = new Image();
cardsArray[6].src = "res/images/clubs/clubs_6.png";
cardsArray[7] = new Image();
cardsArray[7].src = "res/images/clubs/clubs_7.png";
cardsArray[8] = new Image();
cardsArray[8].src = "res/images/clubs/clubs_8.png";
cardsArray[9] = new Image();
cardsArray[9].src = "res/images/clubs/clubs_9.png";
cardsArray[10] = new Image();
cardsArray[10].src = "res/images/clubs/clubs_10.png";
cardsArray[11] = new Image();
cardsArray[11].src = "res/images/clubs/clubs_11.png";
cardsArray[12] = new Image();
cardsArray[12].src = "res/images/clubs/clubs_12.png";
var randomNum = Math.floor(Math.random() * cardsArray.length);

function start() {
  var playerNum = Math.floor(Math.random() * cardsArray.length);
  var enemyNum = Math.floor(Math.random() * cardsArray.length);

  var player = cardsArray[playerNum].outerHTML;
  var enemy = cardsArray[enemyNum].outerHTML;

  console.log(playerNum);
  console.log(cardsArray[playerNum]);

  document.getElementById("player").innerHTML = player;
  document.getElementById("enemy").innerHTML = enemy;
  resetCard();
  checkWinner(playerNum, enemyNum);
  rounds++;
}

function flipCard() {
  this.classList.toggle("flip");
}

function resetCard() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].click();
  }
}

function reset() {
  location = location;
}

function result(x, y) {
  var x = x;
  var y = y;

  if (x == y) {
    console.log("Tie! Play again");
    var result = "Tie! No score.";
  } else if (x > y) {
    console.log("You Won!");
    var result = "Point Player!";
    pscore++;
  } else {
    console.log("You Lost..");
    var result = "Point Computer...";
    escore++;
  }
  document.getElementById("result").innerHTML = result;
  document.getElementById("pscore").innerHTML = "Player = " + pscore;
  document.getElementById("escore").innerHTML = "Computer = " + escore;

  setTimeout(resetCard, 2000);
  DisableEnable();
}

function DisableEnable() {
  document.getElementById("btn").disabled = true;
  setTimeout(function () {
    document.getElementById("btn").disabled = false;
  }, 2500);
}

function checkWinner(x, y) {
  var x = x;
  var y = y;

  if (pscore == 2 || escore == 2) {
    if (x > y && (pscore > escore || pscore == escore)) {
      document.getElementById("result").innerHTML =
        "You deserve a prize... but you won't get any";
      document.getElementById("pscore").innerHTML =
        "After " + rounds + " rounds, You have WON!";
      document.getElementById("escore").innerHTML = "Incredible!";
    } else if (x < y && (pscore < escore || pscore == escore)) {
      document.getElementById("result").innerHTML = "Computer wins $10,000";
      document.getElementById("pscore").innerHTML =
        "After " + rounds + " rounds, You have LOST!";
      document.getElementById("escore").innerHTML = "Too bad..";
    } else {
      result(x, y);
    }
  } else {
    result(x, y);
  }
  console.log(pscore, escore, rounds);
}
