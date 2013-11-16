var unitStats=[],building;

function create2dArray(sizeX,sizeY,value){
	var x,y,array=[];
	for (y=0;y<sizeY;y++){
		array[y]=[];
		for (x=0;x<sizeX;x++){
			array[y][x] = value;
		}
	}
}

unitStats["worker"] = new Stat(10, 1, 5, 0 ,/*img*/ , 1 , 1);

unitStats["soldier"] = new Stat(20, 2, 5 ,0 , /*img*/, 1 , 1)

unitStats["small_ship"] = new Stat(50, 2, 8 , 10,/*img*/ , 1 , 1);

unitStats["big_ship"] = new Stat(50, 2, 5 , 20 ,/*img*/ , 1 , 1);

unitStats["main_building"] = new Stat(100 , 0 , 0 , 5 , /*img*/ , 2 , 2);

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

var map = {
	
	size:new Vector ( 100 , 100 ) ;
	value:create2dArray( size.x, size.y, 0);
	unit:create2dArray( size.x, size.y, 0);

};

function  Unit (type) {
	
	this = unitStats[type];
	
};