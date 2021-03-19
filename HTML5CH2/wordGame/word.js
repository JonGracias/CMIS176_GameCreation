function word() {
    var txtOne = document.getElementById("txtOne");
    var first = txtOne.value;

    var txtTwo = document.getElementById("txtTwo");
    var second = txtTwo.value;

    var txtThree = document.getElementById("txtThree");
    var third = txtThree.value;

    var txtFour = document.getElementById("txtFour");
    var fourth = txtFour.value;

    var txtFive = document.getElementById("txtFive");
    var fifth = txtFive.value;

    var txtSix = document.getElementById("txtSix");
    var sixth = txtSix.value;

    var firstSentence = document.getElementById("firstSentence")
    firstSentence.innerHTML = "Once there was a " + first + ".";

    var secondSentence = document.getElementById("secondSentence")
    secondSentence.innerHTML = "He lived in a  " + second + ".";

    var thirdSentence = document.getElementById("thirdSentence")
    thirdSentence.innerHTML = "The " + first + " felt bad for the " + third + " " + fourth + ".";

    var fourthSentence = document.getElementById("fourthSentence")
   fourthSentence.innerHTML = "So he gave him a " + fifth + ".";

   var fifthSentence = document.getElementById("fifthSentence")
   fifthSentence.innerHTML = "That made the " + fourth + " very " + sixth + ".";


}