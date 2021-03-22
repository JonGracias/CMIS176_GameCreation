function tellStory() {
    //gather form elements
    var txtCharacter = document.getElementById("txtCharacter");
    var txtWeapon = document.getElementById("txtWeapon");
    var txtSkill = document.getElementById("txtSkill");
    var txtSkill2 = document.getElementById("txtSkill2");
    var txtShip = document.getElementById("txtShip");
    var txtCompanion = document.getElementById("txtCompanion");
    var txtRelationship = document.getElementById("txtRelationship")
    var txtPlanet = document.getElementById("txtPlanet")
    var output = document.getElementById("output")

    //create variables for input
    var character = txtCharacter.value;
    var weapon = txtWeapon.value;
    var skill = txtSkill.value;
    var skill2 = txtSkill2.value;
    var ship = txtShip.value;
    var companion = txtCompanion.value;
    var relationship = txtRelationship.value;
    var planet = txtPlanet.value;

    if (character == "Cartwright") {
        if (companion == "Yuri") {
            if (planet == "Klendathu") { 
                if(relationship == "Time Machine") {
                    //Everything is right 
                    var story = character + " was with " + companion;
                    story += ". They were landing " + ship + " on the planet " + planet + ".";
                    story += "Their intel told them the acient treasure of " + relationship + "was on this planet" 
                    story += "as soon as they got of the ship Zorak jumped from behind the landing gears"
                    story += " but " + character + " was ready to attack with " + weapon + " He blasted a shot but missed!";
                    story += " Zorak used his insect skill of " + skill + " leaving " + character + " confused.";
                    story += character + " Then used his sacred power of " + skill2 + " killing Zorak.";
                    story += "Sadly " + character + "turned around and realized during the fight " + companion + " was mortally wounded."
                    story += character + " was devestated. Luckily, the treasure of " + relationship + " was a time machine."
                    output.innerHTML = story

                } else {
                    //Everything is right but treasure is not a time machine
                    var story = character + " was with " + companion;
                    story += ". They were landing " + ship + " on the planet " + planet + ".";
                    story += "Their intel told them the acient treasure of " + relationship + "was on this planet" 
                    story += "as soon as they got of the ship Zorak jumped from behind the landing gears"
                    story += " but " + character + " was ready to attack with " + weapon + " He blasted a shot but missed!";
                    story += " Zorak used his insect skill of " + skill + " leaving " + character + " confused.";
                    story += character + " Then used his sacred power of " + skill2 + " killing Zorak.";
                    story += "Sadly " + character + "turned around and realized during the fight " + companion + " was mortally wounded."
                    story += character + " was devestated. Luckily, the treasure of " + relationship + " was a time machine."
                    output.innerHTML = story
                }
            } else {
                //Cartwright and Yuri travel together but to the wrong planet
                var story = character + " was with " + companion;
                story += ". They were landing " + ship + " on the planet " + planet + ".";
                story += "Their intel told them the acient treasure of " + relationship + "was on this planet" 
                story += "as soon as they got of the ship Zorak jumped from behind the landing gears"
                story += " but " + character + " was ready to attack with " + weapon + " He blasted a shot but missed!";
                story += " Zorak used his insect skill of " + skill + " leaving " + character + " confused.";
                story += companion + " Then used his sacred power of " + skill2 + " killing Zorak.";
                story += "Sadly " + companion + "turned around and realized during the fight " + character + " was mortally wounded."
                story += companion + " searched the planet for the treasure of " + relationship + ". Unfourtunatley he never."
                output.innerHTML = story
            }
        } else {
            //Cartwright does not travel with Yuri planet is not important
            var story = character + " was with " + companion;
                story += ". They were landing " + ship + " on the planet " + planet + ".";
                story += "Their intel told them the acient treasure of " + relationship + "was on this planet" 
                story += "as soon as they got of the ship Zorak jumped from behind the landing gears"
                story += " but " + character + " was ready to attack with " + weapon + " He blasted a shot but missed!";
                story += " Zorak used his insect skill of " + skill + " leaving " + character + " confused.";
                story += companion + " Then used his sacred power of " + skill2 + " killing Zorak.";
                story += "Sadly " + companion + "turned around and realized during the fight " + character + " was mortally wounded."
                story += companion + " searched the planet for the treasure of " + relationship + ". Unfourtunatley he never."
                output.innerHTML = story
        }
    } else {
        //Story is about meeting Cartwright and Yuri that tell you of great treasure 
        var story = "";
    }
}


