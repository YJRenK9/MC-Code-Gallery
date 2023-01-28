var dendroButton = document.getElementById("scatter-btn");
var toggleState = true;
dendroButton.addEventListener("click", function() {
    var nahidaGif = document.getElementById("dendro");

    if (toggleState == true) {
        //changes the img src of the original/initial image
        nahidaGif.src = "images/kusanali_dance.gif";
        // nahidaGif.style.width = "360px";
        // nahidaGif.style.height = "640px";
        nahidaGif.width = 360;
        nahidaGif.height = 640;
        toggleState = false;
    } else {
        nahidaGif.src = "images/dendro.png";
        // nahidaGif.style.width = "225px";
        // nahidaGif.style.height = "225px";
        nahidaGif.width = 225;
        nahidaGif.height = 225;
        toggleState = true;
    }

    //nahidaGif.src = "images/kusanali_dance.gif";
    //https://stackoverflow.com/questions/1297449/change-image-size-with-javascript
});