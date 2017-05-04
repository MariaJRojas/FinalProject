//controlling djpanda
function Djpanda(tempX, tempY){
   this.x = tempX;
   this.y = tempY;
   this.speed = 60;  //speed at which djpanda image moves
   
   this.up = function(){  
    this.y -= this.speed;
  }
  
  this.down = function(){
    this.y += this.speed;
  }
  
  this.right = function(){
    this.x += this.speed;
  }
  
  this.left = function(){
    this.x -= this.speed;
  }
   
   this.display = function (){
     image(img2,this.x, this.y,250, 150); //starting point of djpanda image, and image2
   }
 }