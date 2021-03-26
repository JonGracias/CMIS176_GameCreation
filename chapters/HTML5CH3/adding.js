function addWrong(){
    //from typeConv.html
    //input two numbers
    var txtX = document.getElementById("mathInput1");
    var txtY = document.getElementById("mathInput2");

    var x = txtX.value;
    var y = txtY.value;
    var sum = x + y;

    var mathOutput = document.getElementById("mathOutput")
    mathOutput.innerHTML = x + " + " + y + " = " + sum;
} // end addwrong

function addRight(){
    //from typeConv.html
    //input two numbers
    var txtX = document.getElementById("mathInput1");
    var txtY = document.getElementById("mathInput2");

    var X = txtX.value;
    var Y = txtY.value;

    x = parseInt(X)
    y = parseInt(Y)

    var sum = x + y;

    var mathOutput = document.getElementById("mathOutput")
    mathOutput.innerHTML = x + " + " + y + " = " + sum;
} // end addwrong