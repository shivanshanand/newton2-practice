class ground{
    constructor(x,y,b,c){
        this.body=Bodies.rectangle(x,y,b,c, {isStatic:true});
        World.add(world,this.body);

        this.width=b
        this.height=c
    }

    show(){
        fill("green")
        rectMode(CENTER);
        rect( this.body.position.x , this.body.position.y, this.width, this.height ) ;
    }
  }