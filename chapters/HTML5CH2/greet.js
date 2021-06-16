function greet() {
    var txtName = document.getElementById("txtName");
    var userName = txtName.value;
    var output = document.getElementById("output")
    output.innerHTML = "Hi, " + userName +"!";
}

function getRandom() {
    output.innerHTML = "";

    for (i = 0; i <= 10; i++) {

         output.innerHTML += i + "<br />";

    } // end for loop

} // end count