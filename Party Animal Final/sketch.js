//I changed my song, because I found this one to be more fun to play with, especially
//with the graphics, I enjoyed doing this more. My overall idea, came from something I 
//remembered was presented in class, which was Madison's bee hive, I really liked the 
//concept of having an object follow something else, which I felt fit perfect with the song's
//theme.There's a part in the song that repeats windin windin, and the motion of the pandas is also
//winding. I looked upon her source for reference http://natureofcode.com/book/chapter-1-vectors/.
//I also altered some aspects of it and added more to the platform.
 


var img;
var img2;
var img3; 
var img4;

var song;

var r =0;
var g =0;
var b =0;

function preload(){ //preload sound
 soundFormats = ('mp3'); //identify format
  song = loadSound('Sound/PartyAnimal.mp3');
  //I created the panda cartoon in illustrator, and edited the dj panda by adding some color and outline
  img = loadImage ('panda.png');
  img2 = loadImage ('panda3.png');
  img3 = loadImage ('tiger.png');
  img4=loadImage ('koala.png');
}


var pandas = []; //panda array
var tigers = []; //tiger array
var koalas = []; //tiger array
var djpanda; //declare 


function setup() {
  createCanvas(1200, 600);
  song.play();
  
  djpanda = new Djpanda(100, 50); //initialize object
  
  for (var i = 0; i < 3; i++) { //increase amount of pandas to 3
     pandas[i] = new Pandas();  
  }
  for (var i = 0; i < 3; i++) { //increase amount of pandas to 3
     tigers[i] = new Tigers();  
  }
     for (var i = 0; i < 1; i++) { //increase amount of pandas to 1
     koalas[i] = new Koalas();  
  }
  
}

function draw() {
  background(20);
  fill (r,g,b);
  r= random (255);
  g=random(255);
  b =random (255); 
  
  //text party animal, random color
  textSize(300);
  textFont("Arial");
  fill(r,g,b);
  text ("PARTY", 150, 260); 
  text("ANIMAL", 30,560);
   
 
  
  djpanda.display();

  for (var i = 0; i < pandas.length; i++) { //update each panda 
    pandas[i].update();
    pandas[i].display(); 
  }
    for (var i = 0; i < tigers.length; i++) { //update each tiger 
    tigers[i].update();
    tigers[i].display(); 
  }
   for (var i = 0; i < koalas.length; i++) { //update each koala 
    koalas[i].update();
    koalas[i].display(); 
  }
  
  
}
  
// allows user to move the djpanda around with controls 
function keyPressed(){
	if( keyCode === UP_ARROW){
		console.log("up");
		djpanda.up();
		
	}
  
  else if( keyCode === DOWN_ARROW){
		console.log("down");
		djpanda.down();
		
	}
  
  else if( keyCode === RIGHT_ARROW){
		console.log("right");
		djpanda.right();
		
	}
  
 else if( keyCode === LEFT_ARROW){
		console.log("left");
		djpanda.left();
		
	}
  
}
