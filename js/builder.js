// THIS FILE IS USED TO CREATE ALL THE CANVASES, PART IMAGES, ETC.

//for setting outline glow
var glowColor = "blue";

// Motherboard Canvas
function highlightMotherboard () {
    var canvas = document.getElementById("moboCanvas");
    var context = canvas.getContext('2d');
    var img = new Image();

    img.onload = function() {
        context.drawImage(img, 50, 50);
    };
    img.src = "img/motherboard.jpg";

}