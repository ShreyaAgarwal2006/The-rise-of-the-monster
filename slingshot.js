class Sling{


    constructor(bodyA,pointB){

    //JSON format
    //Structured way of storing data in Javascript
    //Key-Value pairs

       var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 1.2,
            length: 280,
        };


        this.pointB = pointB;
       this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48,27,8);
        strokeWeight(0);
              
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
        }
    }




}