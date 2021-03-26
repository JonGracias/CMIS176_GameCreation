/*Jonathan Gracias
  tellStory.js
  03/22/2021
  This file has three functions. Function 1 takes the value from input elements. 
  It then creates variables for the input.
  Then it writes the story into a 'story' variable.
  Function 2 uses a parameter that gets the story from function one. The function then prints the
  story to the screen in a typing animation. 
  Function 3 simply reloads the page when "Reset" button is clicked*/



function tellStory() {
    //gather form elements    
    var txtCharacter = document.getElementById("txtCharacter");
    var txtWeapon = document.getElementById("txtWeapon");
    var txtAdjective = document.getElementById("txtAdjective");
    var txtPronoun = document.getElementById("txtPronoun");
    var txtShip = document.getElementById("txtShip");
    var txtCompanion = document.getElementById("txtCompanion");
    var txtNoun = document.getElementById("txtNoun");
    var txtPlanet = document.getElementById("txtPlanet");


    //create variables for input
    var character = txtCharacter.value;
    var companion = txtCompanion.value;
    var adjective = txtAdjective.value;
    var pronoun = txtPronoun.value;
    var ship = txtShip.value;
    var planet = txtPlanet.value;
    var noun = txtNoun.value;
    var weapon = txtWeapon.value;



    //write story  
    var story = character + " looked in horror as " + companion + "'s ship was ";
    story += "blown into " + adjective + " pieces by the evil " + pronoun;
    story += " Zorak. Luckily, " + companion + " was able to escape on the escape ship named " + ship;
    story += ". " + companion + " was headed to the nearby planet " + planet + " that was known for it's " + noun;
    story += ". " + character + " knew that the only weapon that could defeat Zorak was " + weapon + ".";

    //Pass story to typeWriter().
    typeWriter(story);
}

//Creates i and speed variable for typeWriter()
var i = 0;
var speed = 100;

//Takes story and types it on screen one letter at a time
function typeWriter(story) {
    var txt = story;

    if (i < txt.length) {
        document.getElementById("output").innerHTML += txt.charAt(i);
        i++;
        setTimeout(tellStory, speed);
    }
}

//Reloads page onclick "Reset" button.
function formReset() {
    location = location;
}

