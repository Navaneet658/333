class Player{
constructor(x,y){
    this.x=x;
    this.y=y;
    this.spt=createSprite(this.x,this.y,50,50)
    this.spt.shapeColor="orange"
   player.spt.addAnimation("player",playerImage);


}

move(xdir,ydir){
this.spt.x += xdir*grid
this.spt.y += ydir*grid
}
}
if(carGroup1.isTouching(player.spt)){
    player.spt.x=width/2;
    player.spt.y=height-75;
}

if(logGroup1.isTouching(player.spt)){
    player.spt.x=player.spt.x-3
}
else if((player.spt.y>height-1550 && player.spt.y<height-1330) ||
(player.spt.y<height-500 && player.spt.y>height-850)||
(player.spt.height>height)
(player.spt.x<0)||
(player.spt.x<width)){
player.spt.x=width/2;
player.spt.y=height-75;
}



