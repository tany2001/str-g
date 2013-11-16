function ch(var a)
{
	var n = Math.random() * a;
	if(n < a)
	{
		return true;
	}
	return false;
}

//0 - water, 1 - dirt
function generateTerrain()
{
	var any = true, chance = 100;
	var next = []; next.push(new Vector(0, 0));

	var moveX = [1, -1, 0, 0];
	var moveY = [0, 0, 1, -1];

	while(any)
	{
		var c = next[0];
		map[c.x][c.y] = 1;

		for(var i = 0;i < moveX.length;i ++)
		{
			if(c.x + moveX[i] >= 0 && c.x + moveX[i] < map.size.x && c.y + moveY[i] >= 0 && c.y + moveY[i] < map.size.y)
			{
				if(ch(chance))
				{
					next.push(new Vector(c.x + moveX[i], c.y + moveY[i]));
				}
			}
		}

		chance -= 2;
	}
}