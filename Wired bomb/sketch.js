
var song;

function preload() {
  
  soundFormats( 'mp3');
  song = loadSound('Sound/LatinoAmerica2.mp3');
}

function setup() {
  createCanvas(600, 800); 

  // song loaded during prelo, ready to play in setup() 
  song.play();
  background(255);
  
  noStroke();
  
    
  //top of heart
  fill(255,36,35,150);
  ellipse(350,300,35,35);
  
  fill(172,8,191,150);
  ellipse(365,295,20,20);
  
  fill(172,8,191);
  rect(360,280,10,25);
  ellipse(365,277,10,5);
  
  fill(14,48,196);
  rect(305,270,20,30);
  ellipse(315,267,10,5);
  ellipse(302,282,5,10);
  
  
  
  
  //heart shape
	fill(255, 36, 35);
	rect(320,360,50,50);
  
  

   fill(255,48,27,150);
  rect(320,300,60,80);
  
  	
  fill (232,13,14);
  rect(290,290,60,90);
  
  //I want to be able to animate these to give the sense that
  //the heart is pumping
  //veins
  fill(31,24,150);
  rect(320,310,2,100);
  rect(290,300,90,4);
  rect(350,360,2,20);

}

function mousePressed() {
  if ( song.isPlaying() ) { 
    song.pause();
    
  } else {
    song.play(); 
    
  }
}

