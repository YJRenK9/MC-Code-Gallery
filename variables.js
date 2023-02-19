var dataType1 = "string ";

var variableName1 = "mobName1 ";
var stringValue1 = " Iron_Golem";
var variableName2 = "mobName2 ";
var stringValue2 = " slime";
var variableName3 = "mobName3 ";
var stringValue3 = " jeb_";
var variableName4 = "mobName4 ";
var stringValue4 = " Dinnerbone";

var paragraph1 = document.getElementById("text");
paragraph1.innerHTML = dataType1 + variableName1 + "=" + stringValue1;
paragraph1.innerHTML += "\t\t" + dataType1 + variableName2 + "=" + stringValue2;
paragraph1.innerHTML += "\t\t" + dataType1 + variableName3 + "=" + stringValue3;
paragraph1.innerHTML += "\t\t" + dataType1 + variableName4 + "=" + stringValue4;

var dataType2 = "int ";

var variableName5 = "numericBlockID ";
var intValue1 = 1;
var variableName6 = "sword_durability ";
var intValue2 = 390;
var variableName7 = "speedPotionLevel ";
var intValue3 = 2;
var variableName8 = "gamemode ";
var intValue4 = 1;

var paragraph2 = document.getElementById("wholeNumbers");
paragraph2.innerHTML = dataType2 + variableName5 + "= " + intValue1;
paragraph2.innerHTML += "\t\t" + dataType2 + variableName6 + "= " + intValue2;
paragraph2.innerHTML += "\t\t" + dataType2 + variableName7 + "= " + intValue3;
paragraph2.innerHTML += "\t\t" + dataType2 + variableName8 + "= " + intValue4;

var dataType3 = "float ";

var variableName9 = "attackSpeed ";
var floatValue1 = 1.2;
var floatValue2 = 1.6;

var paragraph3 = document.getElementById("decimalNumbers");
paragraph3.innerHTML = dataType3 + variableName9 + "= " + floatValue1;
paragraph3.innerHTML += "\t\t\t\t\t\t" + dataType3 + variableName9 + "= " + floatValue2;

var dataType4 = "bool ";

var variableName10 = "activateGlitchArt ";
var variableName11 = "keepInventory ";
var boolValue1 = false;
var boolValue2 = true;

var paragraph4 = document.getElementById("booleans1");
paragraph4.innerHTML = dataType4 + variableName10 + "= " + boolValue1;
paragraph4.innerHTML += "\t\t\t\t" + dataType4 + variableName10 + "= " + boolValue2;

var paragraph5 = document.getElementById("booleans2");
paragraph5.innerHTML = dataType4 + variableName11 + "= " + boolValue1;
paragraph5.innerHTML += "\t\t\t\t" + dataType4 + variableName11 + "= " + boolValue2;

/*
    Unicode for whitespace: \u00A0
*/