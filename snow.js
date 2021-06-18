class Snow {
    constructor(x,y,w,h) {
      var options = {
        restitution: 0.5,
        friction:0.8,
        density:0.03
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.height = height;
      this.Snow = loadImage("snow5.webp");
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      push();
         translate(pos.x,pos.y);
         rotate(angle);
        rectMode(CENTER);
        // snow.body.x = Math.round(random(100,1100));
         
       
        image(this.image, this.body.pos.x, this.body.pos.y,w, h);
     pop();
      
      
    }
  }
