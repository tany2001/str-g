var unitStats=[];

unitStats["worker"] = new Stat(10, 1, 5, 0);


function Stat(hp, damage, speed, cappacity, image, ){

	this.hp = hp;
	this.damage = damage;
	this.speed = speed;
	this.cappacity = cappacity;
	this.image = new Image();
	this.image = image;
	
}

function Vector(x,y){
	this.x=x;
	this.y=y;
};

var Map = {
	size:new Vector ( 100 , 100 ) ;
	value:create2dArray( size.x, size.y );
};

function  Unit (type) {
	
	this.type=type;
	this.hp=unitStats[type].hp;
	this.damage=unitStats[type].damage;
	this.speed=unitStats[type].speed;
	
};