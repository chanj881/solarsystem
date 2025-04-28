let mercuryAngle = 0; // Chelsea
let venusAngle = 0;   // Lily
let earthAngle = 0;   // Kelly
let marsAngle = 0;    // Erica
let jupiterAngle = 0; // Nova
let saturnAngle = 0;  // Arya
let uranusAngle = 0;  // Max
let neptuneAngle = 0; // Neptune

let mercuryStartAngle = 45;  // randomized start angles
let venusStartAngle = 90;    
let earthStartAngle = 135;  
let marsStartAngle = 180;    
let jupiterStartAngle = 125; 
let saturnStartAngle = 270;  
let uranusStartAngle = 25;  
let neptuneStartAngle = 220; 

let starCount = 200;  // Number of stars
let stars = [];   


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(30);
  smooth();
  
   // Create stars
  createStars();
  
  
}



function draw() {
  background("#000000");
  
    // Draw stars
  drawStars();

  fill(255);
  textSize(20);
  text("Planet's Distance from the Sun & Planet Sizes", 50, 50);

  translate(windowWidth / 2, windowHeight / 2);
  scale(0.6); // for Macbook

  drawOrbits();

  // The Sun
  fill("rgb(255,251,197)");
  noStroke();
  ellipse(0, 0, 120, 120);

  // Planets
  chelseaPlanet(); // Mercury
  lilyPlanet();    // Venus
  kellyPlanet();   // Earth
  ericaPlanet();   // Mars
  novaPlanet();    // Jupiter
  aryaPlanet();    // Saturn
  maxPlanet();     // Uranus
  neptunePlanet(); // Neptune
  


  // rotation angles
mercuryAngle += 1.5 * 2;   
venusAngle   += 0.58 * 2;   
earthAngle   += 0.35 * 2;  
marsAngle    += 0.19 * 2;   
jupiterAngle += 0.03 * 2;   
saturnAngle  += 0.012 * 2;  
uranusAngle  += 0.0042 * 2; 
neptuneAngle += 0.0035 *2;
  
  
}

function createStars() {
  for (let i = 0; i < starCount; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);  
    stars.push({x, y, size});
  }
}

function drawStars() {
  noStroke();
  fill(255, 255, 255, 150);  
  for (let star of stars) {
    ellipse(star.x, star.y, star.size, star.size);
  }
}

function drawOrbits() {
  stroke(255);
  strokeWeight(0.45);
  noFill();
  setLineDash([5, 9]);

  ellipse(0, 0, 250, 250);  // Mercury
  ellipse(0, 0, 375, 375);  // Venus
  ellipse(0, 0, 500, 500);  // Earth
  ellipse(0, 0, 625, 625);  // Mars
  ellipse(0, 0, 750, 750);  // Jupiter
  ellipse(0, 0, 875, 875);  // Saturn
  ellipse(0, 0, 1000, 1000); // Uranus
  ellipse(0, 0, 1125, 1125); // Neptune
}


function chelseaPlanet() { // Mercury
  push();
  rotate(mercuryAngle + mercuryStartAngle); 
  translate(125, 0);
  fill("#BC9E94");
  noStroke();
  ellipse(0, 0, 20, 20);
  pop();
  
}

function lilyPlanet() { // Venus
  push();
  rotate(venusAngle + venusStartAngle); 
  translate(187.5, 0);
  fill("#451D0E");
  noStroke();
  ellipse(0, 0, 35, 35);
  pop();
}



function kellyPlanet() { // Earth
  push();
  rotate(earthAngle + earthStartAngle); 
  translate(250, 0);
  fill("#52A0FF");
  noStroke();
  ellipse(0, 0, 35, 35);
  pop();
  
}

function ericaPlanet() { // Mars
  push();
  rotate(marsAngle + marsStartAngle); 
  translate(312.5, 0);
  fill("#FF6A42");
  noStroke();
  ellipse(0, 0, 20, 20);
  pop();
}

function novaPlanet() { // Jupiter
  push();
  rotate(jupiterAngle + jupiterStartAngle);  
  translate(375, 0);
  fill("#F4FFAA");
  noStroke();
  ellipse(0, 0, 100, 100);
  pop();
}

function aryaPlanet() { // Saturn
  push();
  rotate(saturnAngle + saturnStartAngle); 
  translate(437.5, 0);
  fill("#FFC5F6");
  noStroke();
  ellipse(0, 0, 90, 90);
  pop();
}

function maxPlanet() { // Uranus
  push();
  rotate(uranusAngle + uranusStartAngle);  
  translate(500, 0);
  fill("#CDFBFF");
  noStroke();
  ellipse(0, 0, 60, 60);
  pop();
}


function neptunePlanet() { // Neptune 
  push();
  rotate(neptuneAngle + neptuneStartAngle); 
  translate(562.5, 0);  
  fill("#4F86F7");  
  noStroke();
  ellipse(0, 0, 60, 60); 
  pop();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

