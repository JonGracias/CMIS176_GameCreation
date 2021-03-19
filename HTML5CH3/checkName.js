function checkName() {
    // from if ELse.html
    lblOutput = document.getElementById("lblOutput");
    txtInput = document.getElementById("txtInput");

    userName = txtInput.value;
    if(userName == "safety mode") {
        document.getElementById("morph").innerHTML = "<div id='computer'>\
                                                    <div id='titleMath'>If Else</div>\
                                                    <div id='message'>booting... safety mode</div>";
    } else {
        document.getElementById("morph").innerHTML = "<div id='computer'>\
                                                    <div id='titleMath'>File not found</div>\
                                                    <div id='message'>Error</div>\
                                                    </div>";
        lblOutput.innerHTML = "Do I know you?";
    } //end if
}