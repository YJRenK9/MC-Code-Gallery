let Layer = document.getElementById("imageLayer");
let yPos = document.getElementById("y-coordinate");
let environmentButton = document.getElementById("calculateLayer");
let location_name = document.getElementById("layerName");

environmentButton.addEventListener("click", function() {
    console.log(yPos.value);
    // finds the data type of the input value (default is string)
    console.log(typeof yPos.value);
    //console.log(yPos.value.length);
    // console.log(yPos.value == 42);

    //case when there's no input
    if (yPos.value.length === 0) {
        location_name.innerHTML = "Error: Input cannot be blank! Please enter a REAL NUMBER!";
        location_name.style.color = "red";
        return;
    } else {
        location_name.style.color = "white";
    }

    // case when the input field is a string
    // /[a-z]/i represents all letters case-insensitive
    // https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
    if (yPos.value.match(/[a-z]/i)) {
        Layer.src = "images/SuperFlatGlitch.png";
        location_name.innerHTML = "Error: Please enter a REAL NUMBER!";
        location_name.style.color = "red";
        return;
    }

    // converts string to int
    let theYPos = Number(yPos.value);
    //console.log(typeof theYPos);
    //console.log(theYPos);
    
    // when the user enters a valid input
    if (theYPos >= 2048) {
        Layer.src = "images/Space.png";
        location_name.innerHTML = "Layer: Outer Space";
    } else if (theYPos >= 256) {
        Layer.src = "images/Sky.jpg";
        location_name.innerHTML = "Layer: Above the Clouds";
    } else if (theYPos >= 128) {
        Layer.src = "images/mountains.webp";
        location_name.innerHTML = "Layer: Mountains";
    } else if (theYPos >= 96) {
        Layer.src = "images/Jungle.webp";
        location_name.innerHTML = "Layer: Jungle";
    } else if (theYPos >= 72) {
        Layer.src = "images/Forest.webp";
        location_name.innerHTML = "Layer: Forest";
    } else if (theYPos >= 60 || theYPos > 48) {
        Layer.src = "images/plains.jpg";
        location_name.innerHTML = "Layer: Plains";
    } else if (theYPos >= 48 || theYPos > 16) {
        Layer.src = "images/Cave.webp";
        location_name.innerHTML = "Layer: Caves";
    } else if (theYPos >= 16 || theYPos > -8) {
        Layer.src = "images/Lava_Cave.webp";
        location_name.innerHTML = "Layer: Lava Caves";
    } else if (theYPos <= -8 && theYPos > -48) {
        Layer.src = "images/Deepslate_Cave.webp";
        location_name.innerHTML = "Layer: Deepslate Caves";
    } else if (theYPos <= -48 && theYPos >= -128) {
        Layer.src = "images/DeepDark.webp";
        location_name.innerHTML = "Layer: The Deep Dark";
    } else {
        Layer.src = "images/The_Void.webp";
        location_name.innerHTML = "Layer: Void";
    }
    
});