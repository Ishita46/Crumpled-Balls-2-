class Dustbin
{
    constructor(x,y)
    {
        
        this.x=x
        this.y=y
        this.dustbinwidth = 200
        this.dustbinheight = 100
        this.wallthickness = 20
        this.image = loadImage("dustbingreen.png");
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true})
        this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness, this.dustbinheight,{isStatic:true})
        this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness, this.dustbinheight,{isStatic:true})
        
        
        World.add(world, this.bottombody);
        World.add(world, this.leftwallbody);
        World.add(world, this.rightwallbody);

    }
    display()
    {
        var posbottom=this.bottombody.position;
        var posright=this.rightwallbody.position;
        var posleft=this.leftwallbody.position;

       push()
       translate(posleft.x, posleft.y);
       rectMode(CENTER)
       angleMode(RADIANS)
       fill("RED");
      //strokeWeight(3);
       rotate(this.angle)

       pop()
       push()
       translate(posright.x, posright.y);
       rectMode(CENTER)
       angleMode(RADIANS)
       fill("RED");
       //strokeWeight(3);
 
       rotate(-1*this.angle)
       pop()
       push()
       translate(posbottom.x, posbottom.y);
       rectMode(CENTER)
       angleMode(RADIANS)
       fill("RED");
       imageMode(CENTER)
       image(this.image,0, -this.dustbinheight/2, this.dustbinwidth, this.dustbinheight)
       //strokeWeight(3);
       rotate(this.angle)
       //rect(0,0,this.dustbinwidth,this.wallthickness)
       pop()
    }
}
