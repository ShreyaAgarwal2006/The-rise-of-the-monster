class Monster{
    constructor(x,y,r){
        var options = {
             isStatic: true ,
            density:5,
            frictionAir:0
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //fill("white");
        image(this.image,pos.x,pos.y,160,160);
    }
}