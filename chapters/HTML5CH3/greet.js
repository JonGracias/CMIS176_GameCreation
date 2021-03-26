function greet() {
    var txtName = document.getElementById("txtInput");
    var userName = txtName.value;
    var lblOutput = document.getElementById("lblOutput")
    lblOutput.innerHTML = "Hi, " + userName +"!";
}