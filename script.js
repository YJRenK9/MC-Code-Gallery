var Layer = document.getElementById("imageLayer");
var descendVeritcally = document.getElementById("descend");
var ascendVeritcally = document.getElementById("ascend");
var verticalPosition = document.getElementById("getVerticalPosition");
var location_name = document.getElementById("layerName");

var y_position = 5;

descendVeritcally.addEventListener("click", function() {
    // decrease the y position
    y_position -= 1;
    
    //update the y position
    verticalPosition.innerHTML = "y = " + y_position;

    // frequently checks the y position in order to determine what layer the player is in
    if (y_position >= 48) {
        Layer.src = "images/Space.png";
        location_name.innerHTML = "Layer: Outer Space";
    } else if (y_position >= 24) {
        Layer.src = "images/Sky.jpg";
        location_name.innerHTML = "Layer: Above the Clouds";
    } else if (y_position >= 12) {
        Layer.src = "images/mountains.webp";
        location_name.innerHTML = "Layer: Mountains";
    } else if (y_position >= 9) {
        Layer.src = "images/Jungle.webp";
        location_name.innerHTML = "Layer: Jungle";
    } else if (y_position >= 7) {
        Layer.src = "images/Forest.webp";
        location_name.innerHTML = "Layer: Forest";
    } else if (y_position >= 5) {
        Layer.src = "images/plains.jpg";
        location_name.innerHTML = "Layer: Plains";
    } else if (y_position >= 2) {
        Layer.src = "images/Cave.webp";
        location_name.innerHTML = "Layer: Caves";
    } else if (y_position >= 0) {
        Layer.src = "images/Lava_Cave.webp";
        location_name.innerHTML = "Layer: Lava Caves";
    } else if (y_position >= -4) {
        Layer.src = "images/Deepslate_Cave.webp";
        location_name.innerHTML = "Layer: Deepslate Caves";
    } else if (y_position >= -12) {
        Layer.src = "images/DeepDark.webp";
        location_name.innerHTML = "Layer: The Deep Dark";
    } else {
        Layer.src = "images/The_Void.webp";
        location_name.innerHTML = "Layer: Void";
    }
});

ascendVeritcally.addEventListener("click", function() {
    // increase the y position
    y_position += 1;

    // update the y postion
    verticalPosition.innerHTML = "y = " + y_position;

    // frequently checks the y position in order to determine what layer the player is in
    if (y_position >= 48) {
        Layer.src = "images/Space.png";
        location_name.innerHTML = "Layer: Outer Space";
    } else if (y_position >= 24) {
        Layer.src = "images/Sky.jpg";
        location_name.innerHTML = "Layer: Above the Clouds";
    } else if (y_position >= 12) {
        Layer.src = "images/mountains.webp";
        location_name.innerHTML = "Layer: Mountains";
    } else if (y_position >= 9) {
        Layer.src = "images/Jungle.webp";
        location_name.innerHTML = "Layer: Jungle";
    } else if (y_position >= 7) {
        Layer.src = "images/Forest.webp";
        location_name.innerHTML = "Layer: Forest";
    } else if (y_position >= 5) {
        Layer.src = "images/plains.jpg";
        location_name.innerHTML = "Layer: Plains";
    } else if (y_position >= 2) {
        Layer.src = "images/Cave.webp";
        location_name.innerHTML = "Layer: Caves";
    } else if (y_position >= 0) {
        Layer.src = "images/Lava_Cave.webp";
        location_name.innerHTML = "Layer: Lava Caves";
    } else if (y_position >= -4) {
        Layer.src = "images/Deepslate_Cave.webp";
        location_name.innerHTML = "Layer: Deepslate Caves";
    } else if (y_position >= -12) {
        Layer.src = "images/DeepDark.webp";
        location_name.innerHTML = "Layer: The Deep Dark";
    } else {
        Layer.src = "images/The_Void.webp";
        location_name.innerHTML = "Layer: Void";
    }
});

// if you put the if/else statement outside of the event listeners, then it'll only run once
