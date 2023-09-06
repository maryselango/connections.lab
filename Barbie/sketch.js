let barbie = [
  "Hi Malibu Barbie!",
  "Hi President Barbie!",
  "Hi Astronaut Barbie!",
  "Hi IMA Barbie!",
  "Hi Film Barbie!",
  "Hi Teacher Barbie!",
  "Hi Artist Barbie!",
  "Hi Creative Director Barbie",
  "Hi Designer Barbie",
  "Hi regular normal Barbie!",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(233, 65, 150);
  fill(255);
  textFont("Cherry Bomb One")
  textSize(20);
  textAlign(CENTER);
  text("What Barbie are you?", width/2, height/2);
}

function draw() {}

function mousePressed() {
  background(233, 65, 150);
  let index = int(random(0, barbie.length));
  if (barbie.length > 0) {
    text(barbie[index], width/2, height/2);
  }
 else { text("see you later barbie!", width/2,height/2)}
  
  barbie.splice(index, 1);
}
