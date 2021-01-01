class rope {
    constructor(bodyA,pointB){
        var options ={
            bodyA: b1,
            pointB: b2,
            stiffness:1,
            angularstiffness:1
        }

        this.pointB=pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;

        this.rope=Constraint.create(options)
        World.add(world,this.rope);
    }

    display(){

        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(3,5);
            stroke('#fff');
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
       }  
    }
}