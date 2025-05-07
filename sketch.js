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

let mercuryTitle;
let venusTitle;
let earthTitle;
let marsTitle;
let jupiterTitle;
let saturnTitle;
let uranusTitle;
let neptuneTitle;

let isTitle1Hover = false;
let isTitle2Hover = false;
let isTitle3Hover = false;
let isTitle4Hover = false;
let isTitle5Hover = false;
let isTitle6Hover = false;
let isTitle7Hover = false;
let isTitle8Hover = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(30);
  smooth();
  
   // Create stars
  createStars();
  
   // Create mercury label element
  mercuryTitle = createElement('div', 'Mercury');
  mercuryTitle.position(50, 80);
  mercuryTitle.style('color', 'white');
  mercuryTitle.style('font-family', 'Courier New');
  mercuryTitle.style('font-size', '20px');

  mercuryTitle.mouseOver(() => {
    isTitle1Hover = true;
  });

  mercuryTitle.mouseOut(() => {
    isTitle1Hover = false;
  });
  
     // Create venus label element
  venusTitle = createElement('div', 'Venus');
  venusTitle.position(50, 110);
  venusTitle.style('color', 'white');
  venusTitle.style('font-family', 'Courier New');
  venusTitle.style('font-size', '20px');

  venusTitle.mouseOver(() => {
    isTitle2Hover = true;
  });

  venusTitle.mouseOut(() => {
    isTitle2Hover = false;
  });
  
     // Create earth label element
  earthTitle = createElement('div', 'Earth');
  earthTitle.position(50, 140);
  earthTitle.style('color', 'white');
  earthTitle.style('font-family', 'Courier New');
  earthTitle.style('font-size', '20px');

  earthTitle.mouseOver(() => {
    isTitle3Hover = true;
  });

  earthTitle.mouseOut(() => {
    isTitle3Hover = false;
  });
  
  
     // Create mars label element
  marsTitle = createElement('div', 'Mars');
  marsTitle.position(50, 170);
  marsTitle.style('color', 'white');
  marsTitle.style('font-family', 'Courier New');
  marsTitle.style('font-size', '20px');

  marsTitle.mouseOver(() => {
    isTitle4Hover = true;
  });

  marsTitle.mouseOut(() => {
    isTitle4Hover = false;
  });
  
     // Create jupiter label element
  jupiterTitle = createElement('div', 'Jupiter');
  jupiterTitle.position(50, 200);
  jupiterTitle.style('color', 'white');
  jupiterTitle.style('font-family', 'Courier New');
  jupiterTitle.style('font-size', '20px');

  jupiterTitle.mouseOver(() => {
    isTitle5Hover = true;
  });

  jupiterTitle.mouseOut(() => {
    isTitle5Hover = false;
  });
  
     // Create saturn label element
  saturnTitle = createElement('div', 'Saturn');
  saturnTitle.position(50, 230);
  saturnTitle.style('color', 'white');
  saturnTitle.style('font-family', 'Courier New');
  saturnTitle.style('font-size', '20px');

  saturnTitle.mouseOver(() => {
    isTitle6Hover = true;
  });

  saturnTitle.mouseOut(() => {
    isTitle6Hover = false;
  });
  
     // Create uranus label element
  uranusTitle = createElement('div', 'Uranus');
  uranusTitle.position(50, 260);
  uranusTitle.style('color', 'white');
  uranusTitle.style('font-family', 'Courier New');
  uranusTitle.style('font-size', '20px');

  uranusTitle.mouseOver(() => {
    isTitle7Hover = true;
  });

  uranusTitle.mouseOut(() => {
    isTitle7Hover = false;
  });
  
     // Create neptune label element
  neptuneTitle = createElement('div', 'Neptune');
  neptuneTitle.position(50, 290);
  neptuneTitle.style('color', 'white');
  neptuneTitle.style('font-family', 'Courier New');
  neptuneTitle.style('font-size', '20px');

  neptuneTitle.mouseOver(() => {
    isTitle8Hover = true;
  });

  neptuneTitle.mouseOut(() => {
    isTitle8Hover = false;
  });
  
}



function draw() {
  background("#000000");
  
    // Draw stars
  drawStars();

  fill(255);
  textFont('Courier New');
  textSize(20);
  text("Planet's Distance from the Sun", 50, 50);

  translate(windowWidth / 2, windowHeight / 2);
  scale(0.6); // for Macbook

  drawOrbits();

  // The Sun
  fill("rgb(255,251,197)");
  noStroke();
  ellipse(0, 0, 150, 150);
   push()
    fill(0)
    textSize(25)
    text("Sun", -20, 5)
    pop()

  // Planets
  chelseaPlanet(); // Mercury
  lilyPlanet();    // Venus
  kellyPlanet();   // Earth
  ericaPlanet();   // Mars
  novaPlanet();    // Jupiter
  aryaPlanet();    // Saturn
  maxPlanet();     // Uranus
  neptunePlanet(); // Neptune

    // Tooltip logic
  if (isTitle1Hover) {
    showMercuryTooltip();
  }
  
    if (isTitle2Hover) {
    showVenusTooltip();
  }

    if (isTitle3Hover) {
    showEarthTooltip();
  }
  
    if (isTitle4Hover) {
    showMarsTooltip();
  }
  
    if (isTitle5Hover) {
    showJupiterTooltip();
  }
  
    if (isTitle6Hover) {
    showSaturnTooltip();
  }
  
    if (isTitle7Hover) {
    showUranusTooltip();
  }
  
    if (isTitle8Hover) {
    showNeptuneTooltip();
  }

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
    push()
    rotate(- (mercuryAngle + mercuryStartAngle))
    fill("white")
    text("Mercury", -40, 0)
    pop()
  pop();
  
}

function lilyPlanet() { // Venus
  push();
  rotate(venusAngle + venusStartAngle); 
  translate(187.5, 0);
  fill("#6D2B12");
  noStroke();
  ellipse(0, 0, 35, 35);
    push()
    rotate(- (venusAngle + venusStartAngle))
    fill("white")
    text("Venus", -30, 0)
    pop()
  pop();
}



function kellyPlanet() { // Earth
  push();
  rotate(earthAngle + earthStartAngle); 
  translate(250, 0);
  fill("#52A0FF");
  noStroke();
  ellipse(0, 0, 35, 35);
    push()
    rotate(- (earthAngle + earthStartAngle))
    fill("white")
    text("Earth", -30, 0)
    pop()
  pop();
  
}

function ericaPlanet() { // Mars
  push();
  rotate(marsAngle + marsStartAngle); 
  translate(312.5, 0);
  fill("#FF6A42");
  noStroke();
  ellipse(0, 0, 20, 20);
    push()
    rotate(- (marsAngle + marsStartAngle))
    fill("white")
    text("Mars", -20, 0)
    pop()
  pop();
}

function novaPlanet() { // Jupiter
  
  push();
  rotate(jupiterAngle + jupiterStartAngle);  
  translate(375, 0);
  fill("#F4FFAA");
  noStroke();
  ellipse(0, 0, 100, 100);
    push()
    rotate(- (jupiterAngle + jupiterStartAngle))
    fill(0)
    text("Jupiter", -40, 0)
    pop()
  pop();
  

}

function aryaPlanet() { // Saturn
  push();
  rotate(saturnAngle + saturnStartAngle); 
  translate(437.5, 0);
  fill("#FFC5F6");
  noStroke();
  ellipse(0, 0, 90, 90);
    push()
    rotate(- (saturnAngle + saturnStartAngle))
    fill(0)
    text("Saturn", -35, 0)
    pop()
  pop();
}

function maxPlanet() { // Uranus
  push();
  rotate(uranusAngle + uranusStartAngle);  
  translate(500, 0);
  fill("#CDFBFF");
  noStroke();
  ellipse(0, 0, 60, 60);
    push()
    rotate(- (uranusAngle + uranusStartAngle))
    fill(0)
    textSize(17)
    text("Uranus", -28, 0)
    pop()
  pop();
}


function neptunePlanet() { // Neptune 
  push();
  rotate(neptuneAngle + neptuneStartAngle); 
  translate(562.5, 0);  
  fill("#4F86F7");  
  noStroke();
  ellipse(0, 0, 60, 60); 
    push()
    rotate(- (neptuneAngle + neptuneStartAngle))
    fill("white")
    text("Neptune", -35, 0)
    pop()
  pop();
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function showMercuryTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#BC9E94");
  textFont('Courier New');
  textSize(20);
  text("62.538 mil. km", 150, 97);
  pop();
}


function showVenusTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#6D2B12");
  textFont('Courier New');
  textSize(20);
  text("107.353 mil. km", 150, 127);
  pop();
}

function showEarthTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#52A0FF");
  textFont('Courier New');
  textSize(20);
  text("150.872 mil. km", 150, 157);
  pop();
}

function showMarsTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#FF6A42");
  textFont('Courier New');
  textSize(20);
  text("248.917 mil. km", 150, 187);
  pop();
}

function showJupiterTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#F4FFAA");
  textFont('Courier New');
  textSize(20);
  text("766.806 mil. km", 150, 217);
  pop();
}

function showSaturnTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#FFC5F6");
  textFont('Courier New');
  textSize(20);
  text("1,434.924 mil. km", 155, 247);
  pop();
}

function showUranusTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#CDFBFF");
  textFont('Courier New');
  textSize(20);
  text("2,921.902 mil. km", 155, 277);
  pop();
}

function showNeptuneTooltip() {
  push();
  resetMatrix(); // Go back to top-left coordinates
  fill("#4F86F7");
  textFont('Courier New');
  textSize(20);
  text("4,471.627 mil. km", 155, 307);
  pop();
}