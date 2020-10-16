class Polygon{
    constructor(x,y,radius){
       this.body = Bodies.circle(x,y,radius)
       this.radius = radius
       World.add(world,this.body)
       
    }
    display(){
        var position = this.body.position
        ellipseMode(CENTER)
        ellipse(position.x,position.y,this.radius)
    }
}