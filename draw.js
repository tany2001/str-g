var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");

function draw()
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	var defaultTrrSize = 1;

	for(var i = 0;i < map.size.x;i ++)
	{
		for(var j = 0;j < map.size.y;j ++)
		{
			if(map.value[i][j] == 1)
			{
				context.fillStyle = "green";
			}
			else
			{
				context.fillStyle = "blue";
			}
			context.fillRect(i * defaultTrrSize, j * defaultTrrSize, defaultTrrSize, defaultTrrSize);
		}
	}
	requestAnimationFrame(draw);
	context.strokeRect(0, 0, canvas.width, canvas.height);
}

draw();