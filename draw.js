var colors = [];
colors[0] = "blue";
colors[1] = "green";
colors[2] = "brown";

function draw()
{
	var defaultTrrSize = 10;

	var sx = players[currentPlayer].cam.x, sy = players[currentPlayer].cam.y;

	for(var i = sx;i < sx + drawView;i ++)
	{
		for(var j = sy;j < sy + drawView;j ++)
		{
			context.drawImage(terrainImage[map.value[i][j]],(i - sx) * defaultTrrSize, (j - sy) * defaultTrrSize, defaultTrrSize, defaultTrrSize);
		}
		
	}

	requestAnimationFrame(draw);
	context.strokeRect(0, 0, canvas.width, canvas.height);
}

drawUI();

function drawUI()
{
	context.fillStyle = "black";
	var defaultTrrSize = 200 / map.size.x; context.fillRect(canvas.width - 200, 0, 200, canvas.height);

	for(var i = 0;i < map.size.x;i ++)
	{
		for(var j = 0;j < map.size.y;j ++)
		{
			context.fillStyle = colors[map.value[i][j]];
			context.fillRect(i * defaultTrrSize + canvas.width - 200, j * defaultTrrSize, defaultTrrSize, defaultTrrSize);
		}
	}
}

draw();