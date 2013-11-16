var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");

window.addEventListener("mousedown", function (args)
{
    var myX = args.clientX - canvas.offsetLeft;
    var myY = args.clientY - canvas.offsetTop;
}, false);

function update()
{
    setTimeout(update, 10);
}

update();