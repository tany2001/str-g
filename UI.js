function moveCamera()
{ 
	var s = 5;

	if(pressedKey[87] && players[currentPlayer].cam.y - s >= 0)
	{
		players[currentPlayer].cam.y -= s;
	}
	if(pressedKey[83] && players[currentPlayer].cam.y + s < map.size.y - drawView)
	{
		players[currentPlayer].cam.y += s;
	}
	if(pressedKey[65] && players[currentPlayer].cam.x - s >= 0)
	{
		players[currentPlayer].cam.x -= s;
	}
	if(pressedKey[68] && players[currentPlayer].cam.x + s < map.size.y - drawView)
	{
		players[currentPlayer].cam.x += s;
	}

	setTimeout(moveCamera, 60);
}

moveCamera();

function moveUnit()
{
	var moveX = [1, -1, 0, 0];
	var moveY = [0, 0, 1, -1];

	for(var i = 0;i < toMove.length;i ++)
	{
		var c = clone(toMove[i]); //coordinatite na neshtoto za mestene
		var mu = map.unit[c.x][c.y];//movable unit - neshtot za murdane
		var any = false; //da iztriq li ot toMove

		if(!mu.target.path) {mu.setPath(c.x, c.y);} //ako nqma generiran put, da generira

		for(var j = 0;j < moveX.length;j ++)
		{
			var c2 = clone(c); c2.x += moveX[j];  c2.y += moveY[j]; //c2 - coordinatite na koito shte se gleda dali moje da se premesti
			var u = map.unit[c.x][c.y];

			if(u.ways[c.x][c.y] > u.ways[c2.x][c2.y] && u.movesLeft > 0)// ako iskam da se premestq na block-che, koeto e po-blizo...
			{
				any = true;
				if(map.unit[c2.x][c2.y] == 0)// i e prazno...
				{
					map.unit[c2.x][c2.y] = u;//se mestq!
					map.unit[c.x][c.y] = 0;
					players[currentPlayer].selected = clone(c2);

					toMove[i].x = c2.x; toMove[i].y = c2.y;
					u.movesLeft --;
					break;
				}
			}
		}

		if(!any){toMove.remove(i);}
	}
	setTimeout(moveUnit, 100);
}

moveUnit();

document.addEventListener('mousedown', mouse, false);

function mouse(e)
{
	var cuk = new Vector();
	cuk.x=e.clientX- canvas.offsetLeft;
	cuk.y=e.clientY- canvas.offsetTop;

	//endTurn
    if(rectCollision(endTurn.pos.x, endTurn.pos.y, endTurn.size.x, endTurn.size.y, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, 0, 0))
    {
    	unitReset(currentPlayer);
        currentPlayer ++;
        if(currentPlayer >= players.length){currentPlayer = 0;}
        players[currentPlayer].selected = new Vector(-1, -1);
    }

    //cukane
	if(rectCollision(0, 0, drawView * defaultTrrSize, drawView * defaultTrrSize, cuk.x, cuk.y, 0, 0))
    {  
    	//otkriva POLENCE na koeto sme cuknali
    	var cx = Math.floor(cuk.x/defaultTrrSize) + players[currentPlayer].cam.x, cy = Math.floor (cuk.y/defaultTrrSize)  + players[currentPlayer].cam.y;

    	if(e.which == 1)//lqv buton
    	{	
	        if(map.unit[cx][cy] != 0)//ako sum cuknal v/u unit
	        {
	        	console.log("selected Unit: " + cx + " " + cy);

	            players[currentPlayer].selected.x = cx;
	            players[currentPlayer].selected.y = cy;
	        }
	        else
	        {
				console.log("Unselected Unit!");

				players[currentPlayer].selected.x = -1;
				players[currentPlayer].selected.y = -1;
	        }	
    	}
        
		if(e.which == 3)//desen buton
		{
			var selX = players[currentPlayer].selected.x, selY = players[currentPlayer].selected.y, able = true;
				
			if(selX != -1 && (cx != selX || cy != selY) && map.unit[selX][selY].owner == currentPlayer)
			{
				map.unit[selX][selY].target.x = cx;
				map.unit[selX][selY].target.y = cy;

				for(var i = 0;i < toMove.length;i ++)
				{
					if(toMove[i].x == selX && toMove[i].y == selY)
					{
						able = false;
					}
				}

				if(able){toMove.push(new Vector(selX, selY)); map.unit[selX][selY].target.path = false;}
			}
		}
	}
}

function unitReset(pid)
{
	for(var i = 0;i < map.size.x;i ++)
	{
		for(var j = 0;j < map.size.y;j ++)
		{
			if(map.unit[i][j] != 0 && map.unit[i][j].owner == pid)
			{
				map.unit[i][j].movesLeft = map.unit[i][j].speed;
			}
		}
	}
}