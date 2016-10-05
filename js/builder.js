// THIS FILE IS USED TO CREATE ALL THE CANVASES, PART IMAGES, ETC.

//for setting outline glow
var glowColor = "blue";

// Motherboard Canvas
function highlightMotherboard () {
    var mobo_canvas = document.getElementById('moboCanvas').getContext('2d');
    var mobo_img = document.getElementById('moboImage');

    mobo_canvas.save();
    mobo_canvas.strokeStyle = glowColor;
    mobo_canvas.shadowColor = glowColor;
    mobo_canvas.shadowOffsetX = 300;
    for (var i = 0; i < 10; i++) {
        mobo_canvas.shadowBlur = i * 2;
        mobo_canvas.strokeRect(-270, 30, 5, 150);
    }
    mobo_canvas.restore();

}