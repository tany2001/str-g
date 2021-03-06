var colors = [];
colors[0] = "blue";
colors[1] = "green";
colors[2] = "brown";
colors[3] = "yellow";

var multy = 1, defaultTrrSize2 = 200 / map.size.x ;

function draw()
{   
	var sx = players[currentPlayer].cam.x, sy = players[currentPlayer].cam.y;

	for(var i = sx;i < sx + drawView;i ++)
	{
		for(var j = sy;j < sy + drawView;j ++)
		{
			context.drawImage(terrainImage[map.value[i][j]],(i - sx) * defaultTrrSize, (j - sy) * defaultTrrSize, defaultTrrSize, defaultTrrSize);
            if(map.unit[i][j]!=0 && map.unit[i][j].isStart)
            {
            	var t = map.unit[i][j].type;
				context.drawImage(unitStats[t].image,map.unit[i][j].direction*map.unit[i][j].frameSize.x,map.unit[i][j].frame*map.unit[i][j].frameSize.y,
				unitStats[t].frameSize.x,unitStats[t].frameSize.y,(i - sx) * defaultTrrSize, (j - sy) * defaultTrrSize, defaultTrrSize, defaultTrrSize);
			}
		}
		
	}
    
	drawUnitStat();
    
    context.drawImage(endTurn.img, endTurn.pos.x, endTurn.pos.y, endTurn.size.x, endTurn.size.y);
    
    drawResourceBar();
   	
   	context.putImageData(minimap, canvas.width - 200, 0);

   	context.lineWidth = 1;
	context.fillStyle = "white";
	context.strokeRect(canvas.width-200+sx*defaultTrrSize2, sy*defaultTrrSize2,(drawView*defaultTrrSize2),(drawView*defaultTrrSize2));
	
	requestAnimationFrame(draw);
	context.strokeRect(0, 0, canvas.width, canvas.height);
}
function drawUnitStat()
{
	context.fillStyle = "black";
	context.font = "15px Arial";
	context.fillRect(canvas.width - 200, 0, 200, canvas.height);
	context.fillStyle = "white";
	context.fillText("Current player: " + players[currentPlayer].name, canvas.width - 200, 215, 200);

	context.fillStyle="black";
	context.fillRect(canvas.width - 200, 240, 200, 400);
	context.fillStyle="white";
	if (players[currentPlayer].selected.x!=-1){
		var sx = players[currentPlayer].selected.x, sy = players[currentPlayer].selected.y;
		
		context.fillText("Unit Owner: " + (map.unit[sx][sy].owner + 1), canvas.width - 200, 240, 200);
		context.fillText("Health Points: " + map.unit[sx][sy].hp + "/" + unitStats[map.unit[sx][sy].type].hp,canvas.width - 200, 255, 200);
		context.fillText("Moves Left: " + map.unit[sx][sy].movesLeft + "/" + map.unit[sx][sy].speed,canvas.width - 200, 270, 200);
		context.fillText("Damage: " + map.unit[sx][sy].damage,canvas.width - 200, 285, 200);
		if (unitStats[map.unit[sx][sy].type].cappacity!=0){
			context.fillText("Cappacity: " + map.unit[sx][sy].cappacity + "/" +unitStats[map.unit[sx][sy].type].cappacity,canvas.width - 200, 300, 200);
		}
	}
}

function drawResourceBar()
{
	context.drawImage(statusBar.food, 0, 0, 40, 40); context.strokeRect(0, 0, 40, 40);
    context.fillRect(40, 0, 60, 40); context.strokeRect(40, 0, 60, 40);
    
    context.drawImage(statusBar.wood, 100, 0, 40, 40); context.strokeRect(100, 0, 40, 40);
    context.fillRect(140, 0, 60, 40); context.strokeRect(140, 0, 60, 40);
    
    context.drawImage(statusBar.money, 200, 0, 40, 40); context.strokeRect(200, 0, 40, 40);
    context.fillRect(240, 0, 60, 40); context.strokeRect(240, 0, 60, 40);


    context.drawImage(statusBar.stone, 300, 0, 40, 40); context.strokeRect(300, 0, 40, 40);
    context.fillRect(340, 0, 60, 40); context.strokeRect(340, 0, 60, 40);
    
    context.fillStyle = "black";
    context.fillText(players[currentPlayer].resourses.food, 40, 28);
    context.fillText(players[currentPlayer].resourses.wood, 140, 28);
    context.fillText(players[currentPlayer].resourses.money, 240, 28);
    context.fillText(players[currentPlayer].resourses.stone, 340, 28);
}

function drawMinimap(sx, sy, fx, fy)
{
	context.fillStyle = "black";
	context.fillRect(canvas.width - 200, 0, 200, 200);

	for(var i = sx;i < fx;i += multy)
	{
		for(var j = sy;j < fy;j += multy)
		{
			context.fillStyle = colors[map.value[i][j]];
			context.fillRect(i * defaultTrrSize2 + canvas.width - 200, j * defaultTrrSize2, defaultTrrSize2 * multy, defaultTrrSize2 * multy);
		}
	}
}

drawMinimap(0, 0, map.size.x, map.size.y);
var minimap = context.getImageData(canvas.width - 200, 0, 200, 200);

draw();