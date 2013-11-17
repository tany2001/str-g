var unitStats=[], terrainImage=[];

terrainImage[0]=new Image();
terrainImage[0].src="a.png";

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

unitStats["worker"] = new Stat(10, 1, 5, 0 , "a.png" , 1 , 1);

unitStats["soldier"] = new Stat(20, 2, 5 ,0 , "a.png" , 1 , 1)

unitStats["small_ship"] = new Stat(50, 2, 8 , 10, "a.png" , 1 , 1);

unitStats["big_ship"] = new Stat(50, 2, 5 , 20 , "a.png" , 1 , 1);

unitStats["main_building"] = new Stat(100 , 0 , 0 , 5 , "a.png" , 2 , 2);

function Stat(hp, damage, speed, cappacity, image , sizeX, sizeY){

	this.hp = hp;
	this.damage = damage;
	this.speed = speed;
	this.cappacity = cappacity;
	this.image = new Image();
	this.image = image;
	this.size = new Vector(sizeX, sizeY);
}

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

function  Unit (type) {
	
	this = unitStats[type]
	
};

Array.prototype.remove = function(from, to)
{
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};