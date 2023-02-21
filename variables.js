var dataType = "bool ";

var variableName1 = "activateGlitchArt";
var variableName2 = "keepInventory";
var boolValue1 = false;
var boolValue2 = true;

var paragraph1 = document.getElementById("booleans1");
paragraph1.innerHTML = dataType + variableName1 + " = " + boolValue1;
paragraph1.innerHTML += "\t\t\t\t" + dataType + variableName1 + " = " + boolValue2;

var paragraph2 = document.getElementById("booleans2");
paragraph2.innerHTML = dataType + variableName2 + " = " + boolValue1;
paragraph2.innerHTML += "\t\t\t\t" + dataType + variableName2 + " = " + boolValue2;

/*
    Unicode for whitespace: \u00A0
*/