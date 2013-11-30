var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");

var unitStats=[], terrainImage=[];

//0 - water
//1 - dirt
//2 - rock
//3 - gold

for(var i = 0;i <= 3;i ++)
{		
	terrainImage[i]=new Image();
	terrainImage[i].src="terrain/" + i + ".png";	
}
var endTurn =
{
    img: new Image(),
    pos: new Vector(665, 576),
    size: new Vector(56, 20),
}
endTurn.img.src = "ET.png";

function create2dArray(sizeX,sizeY,value){
	var x,y,array=[];
	for (y=0;y<sizeY;y++){
		array[y]=[];
		for (x=0;x<sizeX;x++){
			array[y][x] = value;
		}
	}
	return array;
}

function Stat(hp, damage, speed, cappacity, image , sizeX, sizeY , frameSizeX , frameSizeY){

	this.hp = hp;
	this.damage = damage;
	this.speed = speed;
	this.cappacity = cappacity;
	this.image = new Image();
	this.image.src = image;
	this.size = new Vector(sizeX, sizeY);
	this.frameSize = new Vector(frameSizeX,frameSizeY);
}

unitStats["worker"] = new Stat(10, 1, 5, 0 , "worker.png" , 1 , 1,43,43);

unitStats["soldier"] = new Stat(20, 2, 5 ,0 , "soldier.png" , 1 , 1,53,53);

unitStats["knight"] = new Stat(20, 2, 5 ,0 , "knight.png" , 1 , 1);

unitStats["small_ship"] = new Stat(50, 2, 8 , 10, "a.png" , 1 , 1);

unitStats["big_ship"] = new Stat(50, 2, 5 , 20 , "a.png" , 1 , 1);

unitStats["main_building"] = new Stat(100 , 0 , 0 , 5 , "a.png" , 2 , 2);


function Vector(x,y){
	this.x=x;
	this.y=y;
};

function Map(){
	
	this.size = new Vector (600, 600),
	this.value = create2dArray( this.size.x, this.size.y, 0),
	this.unit = create2dArray( this.size.x, this.size.y, 0)

}

var map = new Map();
map.unit[50][51]="worker";

function Unit(type) {
	
	this = unitStats[type];
	this.movesLeft = this.speed;
	this.target = new Vector();
};

Array.prototype.remove = function(from, to)
{
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

function Player(name)
{
	this.cam = new Vector(0, 0);
	this.resourses = 
	{
		wood: 100,
		money: 10,
		food: 100,
		stone: 50,
	}
	this.name = name;
	this.selected = new Vector(-1, -1);//ako e (-1;-1), ne e selectnal nishto
}

var currentPlayer = 0;
var players = [];

players.push(new Player("Player 1"));
players.push(new Player("Player 2"));

var pressedKey = [];
document.addEventListener('keydown', checkKeyDown, false);
document.addEventListener('keyup', checkKeyUp, false);
function checkKeyDown(e)
{
    var keyID = e.keyCode || e.which;
    pressedKey[keyID] = true;
    e.preventDefault();
}
function checkKeyUp(e)
{
    var keyID = e.keyCode || e.which;
    pressedKey[keyID] = false;
    e.preventDefault();
}

var drawView = 30, defaultTrrSize = (canvas.width - 200) / drawView;

function rectCollision(x1, y1, sizeX1, sizeY1, x2, y2, sizeX2, sizeY2) 
{ 
    if(x1 <= x2 && x1 + sizeX1 >= x2 && y1 <= y2 && y1 + sizeY1 >= y2) 
    { 
        return true; 
    } 
    if(x1 >= x2 && x1 <= x2 + sizeX2 && y1 >= y2 && y1 <= y2 + sizeY2) 
    { 
        return true; 
    } 
    return false; 
} 

var statusBar =
{
    food: new Image(),
    wood: new Image(),
    money: new Image(),
    stone: new Image()
}
statusBar.food.src = "status bar/food.png";
statusBar.wood.src = "status bar/wood.jpg";
statusBar.money.src = "status bar/coins.jpg";
statusBar.stone.src = "status bar/stone.jpg";