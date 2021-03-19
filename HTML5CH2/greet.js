function greet() {
    var txtName = document.getElementById("txtName");
    var userName = txtName.value;
    var output = document.getElementById("output")
    output.innerHTML = "Hi, " + userName +"!";
}