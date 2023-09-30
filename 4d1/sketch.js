let glasses 
let videoRed, videoBlue;
let mask;
let videoW = 550;
let videoH = 400;
let cornerRadius = 30;  // Adjust this for roundness

function preload(){
  glasses = loadImage("the4dglasses.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  

  
  videoRed = createCapture(VIDEO);
  videoRed.size(width, height);
  videoRed.hide();

  videoBlue = createCapture(VIDEO);
  videoBlue.size(width, height);
  videoBlue.hide();
  
  mask = createGraphics(videoW, videoH);
  mask.noStroke();
  mask.fill(255);
  
  // Draw top-left corner
  mask.arc(cornerRadius, cornerRadius, cornerRadius*2, cornerRadius*2, PI, PI + HALF_PI);
  // Draw top-right corner
  mask.arc(videoW - cornerRadius, cornerRadius, cornerRadius*2, cornerRadius*2, PI + HALF_PI, TWO_PI);
  // Draw bottom-right corner
  mask.arc(videoW - cornerRadius, videoH - cornerRadius, cornerRadius*2, cornerRadius*2, 0, HALF_PI);
  // Draw bottom-left corner
  mask.arc(cornerRadius, videoH - cornerRadius, cornerRadius*2, cornerRadius*2, HALF_PI, PI);
  
  // Draw the 4 rectangular sections
  mask.rect(cornerRadius, 0, videoW - 2*cornerRadius, videoH);
  mask.rect(0, cornerRadius, videoW, videoH - 2*cornerRadius);
}

function draw() {
  
   console.log(mouseX,mouseY)
  // flip camera 
  translate(width, 0);
  scale(-1, 1);
  
  background(0);
  
  tint(255)

  image(glasses,0,0,width, height)
  //glasses.resize(1920,640)
  
  // Apply the mask and display the videos
  videoBlue.mask(mask.get());
 tint(13, 178, 219);
  image(videoBlue, width/4*2.3, height/4*1, videoW, videoH);

  videoRed.mask(mask.get());
  tint(255, 0, 0);
  image(videoRed, width/9*0.4, height/4*1, videoW, videoH);
}
