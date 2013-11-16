/*function ch(a)
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
	var next = []; next.push(new Vector(50, 50));
	var used = create2dArray(map.size.x, map.size.y, false);

	var moveX = [1, -1, 0, 0];
	var moveY = [0, 0, 1, -1];

	while(any)
	{
		var c = next[0]; next.remove(0);

		map.value.value[c.x][c.y] = 1; used[c.x][c.y] = true;
		any = false;

		for(var i = 0;i < moveX.length;i ++)
		{
			if(c.x + moveX[i] >= 0 && c.x + moveX[i] < map.size.x && c.y + moveY[i] >= 0 && c.y + moveY[i] < map.size.y && !used[c.x + moveX[i]][c.y + moveY[i]])
			{
				if(Math.floor(Math.random() * 1000) > 3)
				{
					any = true;
					next.push(new Vector(c.x + moveX[i], c.y + moveY[i]));
					used[c.x + moveX[i]][c.y + moveY[i]] = true;
				}
			}
		}

		chance -= 0.001;
	}
}

generateTerrain();

*/

function generateMap(sx, sy, maxSize)
{
	map.value[sx][sy] = 0;
	var createdBlocks = 0;
	for(var br = 1;br < maxSize;br ++)
	{
		for(var x = 0;x < map.size.x;x ++)
		{
			for(var y = 0;y < map.size.y;y ++)
			{
				var choose = Math.floor(Math.random() * 2.8);
				if(x - 1 >= 0 && map.value[x][y] == br - 1 && choose == 0)
				{
					map.value[x - 1][y] = br;
					createdBlocks ++;
				}
				if(y - 1 >= 0 && map.value[x][y] == br - 1 && choose == 0)
				{
					map.value[x][y - 1] = br;
					createdBlocks ++;
				}
				if(x + 1 < map.size.x && map.value[x][y] == br - 1 && choose == 0)
				{
					map.value[x + 1][y] = br;
					createdBlocks ++;
				}
				if(y + 1 < map.size.x && map.value[x][y] == br - 1 && choose == 0)
				{
					map.value[x][y + 1] = br;
					createdBlocks ++;
				}
			}
		}
	}
	return createdBlocks;
}

generateMap(map.size.x / 2, map.size.y / 2, 1.00000000001);

/*var again = false;
while(again == false)
{
	if(generateMap(map.size.x / 2, map.size.y / 2, 60) > 200)
	{
		again = true;	
	}
}*/