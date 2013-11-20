var colors = [];
colors[0] = "blue";
colors[1] = "green";
colors[2] = "brown";
colors[3] = "yellow";

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
    
    context.fillStyle = "black";
    context.fillRect(600, 200, 200, 400);
    
	context.fillStyle = "white"; context.font = "15px Arial";
	context.fillText("Current player: " + players[currentPlayer].name, canvas.width - 200, 215);
    
    context.drawImage(endTurn.img, endTurn.pos.x, endTurn.pos.y, endTurn.size.x, endTurn.size.y);

	requestAnimationFrame(draw);
	context.strokeRect(0, 0, canvas.width, canvas.height);
}

drawUI();

function drawUI()
{
	context.fillStyle = "black"; var multy = 2;
	var defaultTrrSize = 200 / map.size.x; context.fillRect(canvas.width - 200, 0, 200, canvas.height);

	for(var i = 0;i < map.size.x;i += multy)
	{
		for(var j = 0;j < map.size.y;j += multy)
		{
			context.fillStyle = colors[map.value[i][j]];
			context.fillRect(i * defaultTrrSize + canvas.width - 200, j * defaultTrrSize, defaultTrrSize * multy, defaultTrrSize * multy);
		}
	}
}

draw();