function draw()
{
	var defaultTrrSize = 6;

	for(var i = 0;i < map.size.x;i ++)
	{
		for(var j = 0;j < map.size.y;j ++)
		{
			if(map.value[i][j] == 1)
			{
				context.fillRect(i * defaultTrrSize, j * defaultTrrSize, defaultTrrSize, defaultTrrSize);
			}
		}
	}
	requestAnimationFrame(draw);
}

draw();