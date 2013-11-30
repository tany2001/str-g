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

document.addEventListener('mousedown', mouse, false);

function mouse(e)
{
	//console.log(e);

	var cuk = new Vector();
	cuk.x=e.clientX- canvas.offsetLeft;
	cuk.y=e.clientY- canvas.offsetTop;

	//endTurn
    if(rectCollision(endTurn.pos.x, endTurn.pos.y, endTurn.size.x, endTurn.size.y, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, 0, 0))
    {
        currentPlayer ++;
        if(currentPlayer >= players.length){currentPlayer = 0;}
    }

    //cukane
	if(rectCollision(0, 0, drawView * defaultTrrSize, drawView * defaultTrrSize, cuk.x, cuk.y, 0, 0))
    {  
    	var cx = Math.floor(cuk.x/defaultTrrSize) + players[currentPlayer].cam.x, cy = Math.floor (cuk.y/defaultTrrSize)  + players[currentPlayer].cam.y;

    	if(e.which == 1)//lqv buton
    	{	
	        if(map.unit[cx][cy] != 0)
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
			var sx = players[currentPlayer].selected.x, sy = players[currentPlayer].selected.y;
				
			if(players[currentPlayer].selected.x != -1 && (cx != sx || cy != sy) )
			{
				map.unit[cx][cy] = map.unit[sx][sy];
				map.unit[sx][sy] = 0;
				players[currentPlayer].selected.x = cx;
				players[currentPlayer].selected.y = cy;
			}
		}
	}
}