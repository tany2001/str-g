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
    if(rectCollision(endTurn.pos.x, endTurn.pos.y, endTurn.size.x, endTurn.size.y, e.clientX, e.clientY, 1, 1))
    {
        currentPlayer ++;
        if(currentPlayer >= players.length){currentPlayer = 0;}
    }
}