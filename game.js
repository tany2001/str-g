var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) { setTimeout (callback, 1000 / 30); };

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