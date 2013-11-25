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
	mouse.x=e.clientX- canvas.offsetLeft;
	mouse.y=e.clientY- canvas.offsetTop;
    if(rectCollision(endTurn.pos.x, endTurn.pos.y, endTurn.size.x, endTurn.size.y, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, 0, 0))
    {
        currentPlayer ++;
        if(currentPlayer >= players.length){currentPlayer = 0;}
    }
	if (rectCollision(0, 0, drawView * defaultTrrSize, drawView * defaultTrrSize, mouse.x, mouse.y, 0, 0)){
		map.unit[Math.floor(mouse.x/defaultTrrSize) + players[currentPlayer].cam.x][Math.floor (mouse.y/defaultTrrSize)  + players[currentPlayer].cam.y]="worker";
	}
}