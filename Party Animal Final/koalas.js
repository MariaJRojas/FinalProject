function Koalas() {
  this.position = new createVector(random(400),random(400));  
  this.velocity = new createVector();
  this.acceleration = new createVector();
  this.topspeed = 6;

  this.update = function() { 
    var point = createVector(djpanda.x, djpanda.y); 
    this.acceleration = p5.Vector.sub(point,this.position);  
    
 
    this.acceleration.setMag(0.07);//length of the acceleration vector 

    this.velocity.add(this.acceleration);//v > with acceleration 
    this.velocity.limit(6); //the velocity cannot be > 6
    this.position.add(this.velocity); 
  };
  
  this.display = function() {
    image(img4,this.position.x, this.position.y,150,175); //display pandas at this position
  };
  
 
  
 
}