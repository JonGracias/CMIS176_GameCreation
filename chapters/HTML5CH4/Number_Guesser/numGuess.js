//form numGuess.js
//page-level variables
var guess;
var correct;
var turns;

//components
var output;
var txtGuess;
var btnAgain;

function init() {
    //from numGuess.js
    //initialize components
    output = document.getElementById("output");
    txtGuess = document.getElementById("txtGuess");
    btnAgain = document.getElementById("again");

    //hide again button
    btnAgain.style.display = "none";

    //initialize counter
    turns = 0;

    //initialize output 
    output.innerHTML = "I'm thiking of a number between 0 and 100.";
    output.innerHTML += "Guess my number, and I'll tell if you are";
    output.innerHTML += "too high, or too low, or correct.";

    //generate random for correct answer
    correct = parseInt(Math.random() * 100);
    console.log(correct);

    //make sure input text gets focus
    txtGuess.focus();

    //end init
}

function checkGuess() {
    //from numGuess.js
    //increment turns
    turns++;

    response = turns + ") ";
    //get guess from user 
    guess = parseInt(txtGuess.value);
    if (guess < correct) {
        response += "Too low";
    } else if (guess > correct) {
        response += "Too high";
    } else if (guess == correct) {
        response += "Correct!";
        //show again button
        btnAgain.style.display = "block";
    } else {
        response += "Please enter a number between 1 and 100";
    }// end if
    output.innerHTML = response;
} //end checkGuess