class ball{
    constructor(x,y,radius){
        var op={
            isStatic: false,
            restitution: 1.1,
            friction: 0,
            frictionAir:0.0,
            slop:1,
            inertia:Infinity,
            density:0.4
        }
        this.body=Bodies.circle(x,y,radius/2,op);
        this.radius= radius/2;
        World.add(world,this.body);

        this.color=color(random(0,255),random(0,255),random(0,255))
    }


    display(){
        push(); 
        translate(this.body.position.x, this.body.position.y ); 
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        noStroke();
        fill(this.color);
        ellipse(0,0, this.radius, this.radius); 
        pop();
    } 
}