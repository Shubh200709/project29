class Polygon{
    constructor(x,y,width,height){
var options={
    restitution:0.4,
    friction:0.0
}
        this.image=loadImage("polygon.png");
        this.width=40;
        this.height=40;
        this.body = Bodies.rectangle(x,y,40,40,options);
        World.add(world,this.body);
        
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        scale(0.02);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}