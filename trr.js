function ch(a)
{
	var n = Math.random() * 100;
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
		var c = next[0]; next.remove(0);

		map.value[c.x][c.y] = 1;
		any = false;

		for(var i = 0;i < moveX.length;i ++)
		{
			if(c.x + moveX[i] >= 0 && c.x + moveX[i] < map.size.x && c.y + moveY[i] >= 0 && c.y + moveY[i] < map.size.y && map.value[c.x + moveX[i]][c.y + moveY[i]] == 0)
			{
				if(ch(chance))
				{
					any = true;
					next.push(new Vector(c.x + moveX[i], c.y + moveY[i]));
				}
			}
		}

		chance -= 0.1;
	}
}

generateTerrain();