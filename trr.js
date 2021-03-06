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

for(var i = 0;i < 45;i ++)
{
	var sx = Math.floor(Math.random() * map.size.x);
	var sy = Math.floor(Math.random() * map.size.y);
	generateMap(sx, sy, 100, 0.005, 1);	
}

for(var i = 0;i < 25;i ++)
{
	var sx = Math.floor(Math.random() * map.size.x);
	var sy = Math.floor(Math.random() * map.size.y);
	generateMap(sx, sy, 100, 0.02, 0);	
}

for(var i = 0;i < map.size.x;i ++)
{
	for(var j = 0;j < map.size.y;j ++)
	{
		if(map.value[i][j] == 1 && chance(0.1))
		{
			if(chance(15))
			{
				generateMap(i, j, 100, 3, 3);
			}
			else
			{
				generateMap(i, j, 100, 2, 2);	
			}
		}
	}
}

var moveX = [1, -1, 0, 0];
var moveY = [0, 0, 1, -1];

for(var i = 1;i < map.size.x - 1;i ++)
{
	for(var j = 1;j < map.size.y - 1;j ++)
	{
		var c = map.value[i][j], c2 = map.value[i + 1][j]; var a = 0;
		for(var k = 0;k < moveX.length;k ++)
		{
			if(map.value[i + moveX[k]][j + moveY[k]] != c && map.value[i + moveX[k]][j + moveY[k]] == c2)
			{
				a ++;
			}
		}
		if(a == 4)
		{
			map.value[i][j] = c2;
		}
	}
}