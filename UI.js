function moveCamera()
{
	var s = 5;
	if(pressedKey[87] && players[currentPlayer].cam.y - s >= 0)
	{
		players[currentPlayer].cam.y -= s;
	}
	if(pressedKey[83] && players[currentPlayer].cam.y + s < map.size.y)
	{
		players[currentPlayer].cam.y += s;
	}

	setTimeout(moveCamera, 60);
}

moveCamera();