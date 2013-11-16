function draw()
{
	var defaultTrrSize = 2;

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
}

draw();