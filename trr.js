function chance(a)
{
	var n = Math.random() * 100;
	if(n <= a)
	{
		return true;
	}
	return false;
}


function generateMap(sx, sy, sch, mch, type)
{
	var next = [], ch = sch;
	var used = create2dArray(map.size.x, map.size.y, false);

	next.push(new Vector(sx, sy));
	used[sx][sy] = true;

	var moveX = [0, 0, -1, 1];
	var moveY = [1, -1, 0, 0];

	while(next.length > 0)
	{
		var c = next[0];
		next.remove(0);
		map.value[c.x][c.y] = type;

		for(var a = 0;a < moveX.length;a ++)
		{
			var n = new Vector(c.x + moveX[a], c.y + moveY[a]);
			if(n.x >= 0 && n.y >= 0 && n.x < map.size.x && n.y < map.size.y && !used[n.x][n.y])
			{
				if(chance(ch))
				{
					used[n.x][n.y] = true;
					next.push(new Vector(n.x, n.y));
					ch -= mch;
				}
			}
		}
	}
}

for(var i = 0;i < 19;i ++)
{
	var sx = Math.floor(Math.random() * map.size.x);
	var sy = Math.floor(Math.random() * map.size.y);
	generateMap(sx, sy, 100, 0.005, 1);	
}

for(var i = 0;i < 18;i ++)
{
	var sx = Math.floor(Math.random() * map.size.x);
	var sy = Math.floor(Math.random() * map.size.y);
	generateMap(sx, sy, 100, 0.02, 0);	
}




