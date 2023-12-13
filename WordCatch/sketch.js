// Game Settings --------------
let stage = 0;
let score = 0;
let readysetgo = 3;
let currentWordIndex = 0;
let correctWordSpelled = false;//to control if spelling is correct



// Letter Setup ------------------------
let SpellingLetters = ["p", "o", "w", "e", "r"];
let SpellingSound = ["Power.mp3", "Capture.mp3", 
  "raspberry.mp3",
  "trapezsoid.mp3",
  "omnibus.mp3",
  "cornucopia.mp3",
  "ostensibly.mp3",
  "millivolt.mp3",
  "lachrymose.mp3",
  "gegenschein.mp3"];
let lettersArray = [
  "w",
  "o",
  "r",
  "d",
  "a",
  "b",
  "c",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

let SpellingWord = [
  "power",
  "capture",
  "raspberry",
  "trapezsoid",
  "omnibus",
  "cornucopia",
  "ostensibly",
  "millivolt",
  "lachrymose",
  "gegenschein",
];

//this variable will check the spelling of each word in the array. separate variable to check.
let wordtocheck;

// Variables -------------------
let bee;
let w, o, r, d, a, b, c, m, j, s, l, g, z, k;
let word = "";
let letters;

// Sound Set up ------------------

let Power, Capture, raspberry, trapezsoid,omnibus,cornucopia,ostensibly,millivolt,lachrymose,gegenschein; 

let soundPlayed = false; // Variable to track whether the sound has been played for the current word
let gameover, bloop; 


//--------------------------------------------

function preload() {
  //loop call back function from Pim. element =i
  SpellingSound.forEach((element) => {
    loadSound(element);
  });
  Power = loadSound("Power.mp3");
  Capture= loadSound("Capture.mp3");
  gameover = loadSound("gameover.mp3");
  bloop = loadSound("goodjob..mp3")
 raspberry=loadSound("raspberry.mp3"); 
 trapezsoid = loadSound("trapezsoid.mp3"); 
   omnibus = loadSound("omnibus.mp3");
  cornucopia = loadSound("cornucopia.mp3");
  ostensibly = loadSound("ostensibly.mp3");
  millivolt = loadSound("millivolt.mp3");
  lachrymose = loadSound("lachrymose.mp3");
  gegenschein = loadSound("gegenschein.mp3");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Cherry Bomb One");
  textSize(44);
  world.gravity.y = 1 / 2;

  //Creating a new Bee Sprite-------------
  bee = new Sprite();
  bee.img = "images/7.png";
  bee.w = 770;
  bee.h = 300;
  bee.scale = 1 / 7;
  bee.collider = "kinematic";
  // Creating New Group of Letters-----------
  letters = new Group();
  setInterval(function () {
    let x = random(20, windowWidth);
    let y = -100;
    let randomLetter = new letters.Sprite(x, y);
    randomLetter.textSize = 1;
    randomLetter.text = getrandomLetter();
    randomLetter.img = "images/" + randomLetter.text + ".png";
    randomLetter.scale = 1 / 15;
  }, 1000);

  bee.collides(letters, stacks);

  wordtocheck = SpellingWord[0];
}

function stacks(bee, letter) {
  letter.remove();
  word += letter.text;



  //if word is spelled wrong end game/also it's checking if the word is just spelled correctly
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== wordtocheck.charAt(i)) {
      console.log("endgame");
      stage = 2;
      gameover;
    }
    //! is an inverse statement
  } //removing the word we just checked
  if (SpellingWord.includes(word)) {
    if (word === wordtocheck && !correctWordSpelled) {
      console.log("yes");
      bloop.play();
      playWordSound(wordtocheck);
      correctWordSpelled = true; // Set the flag to true
moveOnToNextWord();
      SpellingWord.splice(0, 1);

      if (SpellingWord.length == 0) {
        console.log("winner");
      } else {
        wordtocheck = SpellingWord[0];
        correctWordSpelled = false; //reset
        word = ""; //clear word 
      }
    }
  }
}

function draw() {
  if (stage == 0) {
    countdown();
  }
  if (stage == 1) {
    game();
    fill(255);
    textSize(100);
    text("Score: " + score, width/8*6, 100);
  }
  if (stage == 2) {
    endgame();
  }
}

function countdown() {
  clear();
  readysetgo -= 1 / 60;
  fill(179, 7, 141);
  textSize(700);
  textAlign(CENTER,CENTER);
  text(round(readysetgo), width/2, height/2);
  console.log(mouseX, mouseY);

  if (readysetgo <= 0) {
    stage = 1;

    // Play the sound corresponding to the first word
    playWordSound(SpellingWord[currentWordIndex]);

    // Set a timeout to move to the next word and create letter sprites
    setTimeout(function () {
      wordtocheck = SpellingWord[currentWordIndex];

      // Create letter sprites
      setInterval(function () {
        let x = random(20, 480);
        let y = -100;
        let randomLetter = new letters.Sprite(x, y);
        randomLetter.textSize = 1;
        randomLetter.text = getrandomLetter();
        randomLetter.img = "images/" + randomLetter.text + ".png";
        randomLetter.scale = 1 / 15;
      }, 1000);

      // Increase the current word index
      currentWordIndex++;
    });
  }
}

function playWordSound(word) {
  // Map words to corresponding sound files
  const soundMap = {
    power: Power,
    capture: Capture,
    raspberry: raspberry, 
    trapezsoid:trapezsoid,
    omnibus: omnibus,
    cornucopia: cornucopia,
    ostensibly:ostensibly,
    millivolt:millivolt,
    lachrymose:lachrymose,
    gegenschein:gegenschein, 
  };

  // Play the corresponding sound if available
  if (soundMap[word] && !soundPlayed) {
    soundMap[word].play();
     soundPlayed = true; 
    
   
  }
}

function moveOnToNextWord() {
   soundPlayed = false; // Reset the flag for the new word
  correctWordSpelled = true; // Set the flag to true

   // Award points for spelling the word correctly
   score += 1000;

  SpellingWord.splice(0, 1);

  if (SpellingWord.length == 0) {
    console.log("winner");
  } else {
    wordtocheck = SpellingWord[0];
    correctWordSpelled = false; // Reset the flag for the new word
    playWordSound(wordtocheck); // Play the sound for the new word
  }
}




function game() {
  clear();
  // Bee Movement ---------------------
  bee.speed = 3;
  if (kb.pressing("left")) {
    bee.direction = 180;
  } else if (kb.pressing("right")) {
    bee.direction = 0;
  } else {
    bee.speed = 0;
  }
  
  //if the spelling is correct, clear the word and update the wordtocheck
  
  if (correctWordSpelled){
    word = "";
    wordtocheck=SpellingWord[0]
  }

  // Caught Letters ----------------------
  fill(99, 21, 75);
  textSize(150);
  text(word, 250, 40);

  getrandomLetter();
}

function getrandomLetter() {
  let randomLetter = random(lettersArray);
  return randomLetter;
}
function endgame() {
 createCanvas(windowWidth, windowHeight);
   background(0,0,0,40);
  // Lower the volume of the gameover sound (e.g., setVolume(0.5))
    gameover.setVolume(0.3);
    gameover.play();

    fill(255);
    textSize(100);
    textAlign (CENTER,CENTER)
    text("Final Score: " + score, width / 2, height / 2);
  
    // Redirect to a new HTML page after a delay (e.g., 3 seconds)
    setTimeout(function () {
      // Change "newpage.html" to the actual name of your new HTML file
      window.location.href = "gameover.html?score=" + score  ;
    }, 3000);
  }
  
    
  
  
