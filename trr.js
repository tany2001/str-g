function chance(a)
{
	var n = Math.random() * 100;
	if(n <= a)
	{
		return true;
	}
	return false;
}


function generateMap()
{
	var next = [], ch = 100;
	var used = create2dArray(map.size.x, map.size.y, false);

	next.push(new Vector(map.size.x / 2, map.size.y / 2));
	used[map.size.x / 2][map.size.y / 2] = true;

	var moveX = [0, 0, -1, 1];
	var moveY = [1, -1, 0, 0];

	while(next.length > 0)
	{
		var c = next[0];
		next.remove(0);
		map.value[c.x][c.y] = 1;

		for(var a = 0;a < moveX.length;a ++)
		{
			var n = new Vector(c.x + moveX[a], c.y + moveY[a]);
			if(n.x >= 0 && n.y >= 0 && n.x < map.size.x && n.y < map.size.y && !used[n.x][n.y])
			{
				if(chance(ch))
				{
					used[n.x][n.y] = true;
					next.push(new Vector(n.x, n.y));
					ch -= 0.01;
				}
			}
		}
	}
}

generateMap();