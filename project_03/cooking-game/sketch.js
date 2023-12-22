let apple;
let appleChunk;
let cauldron;
let cauldronFire;
let cauldronFireSmoke;
let fire;
let honey;
let honeySpoon;
let knife;
let pineapple;
let pineappleChunk;
let spoon;
let timer;
let none;

let bowl_01;
let bowl_02;
let bowl_03;

let isAppleChopped = false;
let isPineappleChopped = false;
let isHoneyAdded = false;
let fireAdded = false;
let appleAddedCauldron = false;
let pineappleAddedCauldron = false;
let honeyAddedCauldron = false;
let isCooking = false;

// Declare a variable to store the start time of the cooking process
let cookingStartTime;

var num_collected = JSON.parse(localStorage.getItem("num_collected"));
console.log(num_collected, "num_collected");

// get local storage variables
var appleCollected = JSON.parse(localStorage.getItem("collectedApple"));
var pineappleCollected = JSON.parse(localStorage.getItem("collectedPineapple"));
var honeyCollected = JSON.parse(localStorage.getItem("collectedHoney"));

console.log(appleCollected, "apple");
console.log(pineappleCollected, "pineapple");
console.log(honeyCollected, "honey");

let interactedIngredients = {};
let ingredientsInCauldron = {};

if(appleCollected){
  interactedIngredients["apple"] = false;
  ingredientsInCauldron["apple"] = false;
}
if(pineappleCollected){
  interactedIngredients["pineapple"] = false;
  ingredientsInCauldron["pineapple"] = false;
}
if(honeyCollected){
  interactedIngredients["honey"] = false;
  ingredientsInCauldron["honey"] = false;
}

// When an ingredient is interacted with
function interactWithIngredient(ingredient) {
  if (ingredient in interactedIngredients) {
    interactedIngredients[ingredient] = true;
  }
}

// Check if all collected ingredients have been interacted with
function allIngredientsInteracted() {
  for (let ingredient in interactedIngredients) {
    if (!interactedIngredients[ingredient]) {
      return false;
    }
  }
  return true;
}

// Check if all collected ingredients have been added to the cauldron
function allIngredientsAddedCauldron() {
  for (let ingredient in ingredientsInCauldron) {
    if (!ingredientsInCauldron[ingredient]) {
      return false;
    }
  }
  return true;
}


function preload() {
  img = loadImage("assets/Fire.png");

  apple = loadImage("assets/Apple.png");
  appleChunk = loadImage("assets/AppleChunk.png");
  honey = loadImage("assets/Honey.png");
  honeySpoon = loadImage("assets/HoneySpoon.png");
  pineapple = loadImage("assets/Pineapple.png");
  pineappleChunk = loadImage("assets/PineappleChunk.png");

  cauldron = loadImage("assets/Cauldron.png");
  cauldronFire = loadImage("assets/CauldronFire.png");
  cauldronFireSmoke = loadImage("assets/CauldronFireSmoke.png");

  fire = loadImage("assets/Fire.png");
  knife = loadImage("assets/Knife.png");
  spoon = loadImage("assets/Spoon.png");
  timer = loadImage("assets/Timer.png");
  none = loadImage("assets/None.png");

  bowl_01 = loadImage("assets/Bowl_1.png");
  bowl_02 = loadImage("assets/Bowl_2.png");
  bowl_03 = loadImage("assets/Bowl_3.png");
}

function setup() {
  // Create a canvas with the size of the window
  let canvas = createCanvas(windowWidth, windowHeight);

  // Attach the canvas to the 'game-container' div
  canvas.parent("game-container");

  apple = new InteractiveImage(apple, 100, 100, 60, 60);
  pineapple = new InteractiveImage(pineapple, 100, 200, 60, 90);
  honey = new InteractiveImage(honey, 100, 330, 60, 60);

  appleChunk = new InteractiveImage(appleChunk);
  pineappleChunk = new InteractiveImage(pineappleChunk);
  honeySpoon = new InteractiveImage(honeySpoon);

  cauldron = new InteractiveImage(cauldron, 300, 300, 200, 200);
  cauldronFire = new InteractiveImage(cauldronFire, 300, 300, 200, 200);
  cauldronFireSmoke = new InteractiveImage(
    cauldronFireSmoke,
    300,
    300,
    200,
    200
  );

  fire = new InteractiveImage(fire, 700, 50, 80, 80);
  knife = new InteractiveImage(knife, 700, 150, 80, 80);
  spoon = new InteractiveImage(spoon, 700, 250, 80, 80);
  timer = new InteractiveImage(timer, 700, 360, 80, 80);
  none = new InteractiveImage(none);
}

function chopIngredients() {
  // Check if the knife intersects with the apple
  if (
    knife.posX < apple.posX + apple.width && // knife's right edge is to the right of apple's left edge
    knife.posX + knife.width > apple.posX && // knife's left edge is to the left of apple's right edge
    knife.posY < apple.posY + apple.height && // knife's bottom edge is below apple's top edge
    knife.posY + knife.height > apple.posY // knife's top edge is above apple's bottom edge
  ) {
    // If the knife intersects with the apple, change the apple image to the apple chunk image
    apple.image = appleChunk.image;
    isAppleChopped = true;
    interactWithIngredient("apple");
  }

  // Check if the knife intersects with the pineapple
  if (
    knife.posX < pineapple.posX + pineapple.width && // knife's right edge is to the right of pineapple's left edge
    knife.posX + knife.width > pineapple.posX && // knife's left edge is to the left of pineapple's right edge
    knife.posY < pineapple.posY + pineapple.height && // knife's bottom edge is below pineapple's top edge
    knife.posY + knife.height > pineapple.posY // knife's top edge is above pineapple's bottom edge
  ) {
    // If the knife intersects with the pineapple, change the pineapple image to the pineapple chunk image
    pineapple.image = pineappleChunk.image;
    isPineappleChopped = true;
    interactWithIngredient("pineapple");
  }
}

function fillSpoon() {
  // Check if the spoon intersects with the honey
  if (
    spoon.posX < honey.posX + honey.width && // spoon's right edge is to the right of honey's left edge
    spoon.posX + spoon.width > honey.posX && // spoon's left edge is to the left of honey's right edge
    spoon.posY < honey.posY + honey.height && // spoon's bottom edge is below honey's top edge
    spoon.posY + spoon.height > honey.posY // spoon's top edge is above honey's bottom edge
  ) {
    // If the spoon intersects with the honey, change the spoon image to the honey spoon image
    spoon.image = honeySpoon.image;
    isHoneyAdded = true;
    interactWithIngredient("honey");
  }
}

function turnOnFire() {
  // If the fire intersects with the cauldron, change the cauldron image to the cauldron fire image
  if (
    fire.posX < cauldron.posX + cauldron.width && // fire's right edge is to the right of cauldron's left edge
    fire.posX + fire.width > cauldron.posX && // fire's left edge is to the left of cauldron's right edge
    fire.posY < cauldron.posY + cauldron.height && // fire's bottom edge is below cauldron's top edge
    fire.posY + fire.height > cauldron.posY // fire's top edge is above cauldron's bottom edge
  ) {
    cauldron.image = cauldronFire.image;
    fire.hide();
    fireAdded = true;
  }
}

function handleCauldron() {
  // Only add apple to cauldron if apple is chopped
  if (isAppleChopped) {
    if (
      apple.posX < cauldron.posX + cauldron.width && // apple's right edge is to the right of cauldron's left edge
      apple.posX + apple.width > cauldron.posX && // apple's left edge is to the left of cauldron's right edge
      apple.posY < cauldron.posY + cauldron.height && // apple's bottom edge is below cauldron's top edge
      apple.posY + apple.height > cauldron.posY // apple's top edge is above cauldron's bottom edge
    ) {
      apple.hide();
      ingredientsInCauldron['apple'] = true;
    }
  }
  // Only add pineapple to cauldron if pineapple is chopped
  if (isPineappleChopped) {
    if (
      pineapple.posX < cauldron.posX + cauldron.width && // pineapple's right edge is to the right of cauldron's left edge
      pineapple.posX + pineapple.width > cauldron.posX && // pineapple's left edge is to the left of cauldron's right edge
      pineapple.posY < cauldron.posY + cauldron.height && // pineapple's bottom edge is below cauldron's top edge
      pineapple.posY + pineapple.height > cauldron.posY // pineapple's top edge is above cauldron's bottom edge
    ) {
      pineapple.hide();
      ingredientsInCauldron['pineapple'] = true;
    }
  }

  // Only add honey to the cauldron if there is honey is in the spoon
  if (isHoneyAdded) {
    // If the spoon intersects with the cauldron, change the cauldron image to the cauldron fire smoke image
    if (
      spoon.posX < cauldron.posX + cauldron.width && // spoon's right edge is to the right of cauldron's left edge
      spoon.posX + spoon.width > cauldron.posX && // spoon's left edge is to the left of cauldron's right edge
      spoon.posY < cauldron.posY + cauldron.height && // spoon's bottom edge is below cauldron's top edge
      spoon.posY + spoon.height > cauldron.posY // spoon's top edge is above cauldron's bottom edge
    ) {
      spoon.hide();
      ingredientsInCauldron['honey'] = true;
    }
  }
}

function handleTimer() {
  // Check if the timer is clicked
  if (
    mouseX > timer.posX &&
    mouseX < timer.posX + timer.width &&
    mouseY > timer.posY &&
    mouseY < timer.posY + timer.height &&
    mouseIsPressed
  ) {
    // If the timer is clicked, start the cooking process
    isCooking = true;
    cookingStartTime = millis();
  }
}

function draw() {
  background("#FEFCF3");

  cauldron.display();

  if (appleCollected) {
    apple.display();
    apple.handleMouseDrag();
  }
  if (pineappleCollected) {
    pineapple.display();
    pineapple.handleMouseDrag();
  }
  if (honeyCollected) {
    honey.display();
    spoon.display();
    honey.handleMouseDrag();
    spoon.handleMouseDrag();
  }

  knife.display();
  knife.handleMouseDrag();

  chopIngredients();
  fillSpoon();

  if (allIngredientsInteracted()) {
    fire.display();
    fire.handleMouseDrag();
    turnOnFire();
  }
  if (fireAdded) {
    handleCauldron();
    if (allIngredientsAddedCauldron()) {
      timer.display();
      handleTimer();
    }
  }
  // If cooking is in progress, change the screen
  if (isCooking) {
    // If 5 seconds have passed since the cooking process started
    if (millis() - cookingStartTime >= 5000) {
      background("#FEFCF3"); // Change the background to the original color

      // Display the title
      fill(0); // Change the text color to black
      textSize(32); // Set the text size
      text("You have created the following dish:", 100, 50); // Display the title

      if(num_collected == 1){
        // Display the bowl, centered
        image(bowl_01, 300, 300 - 150, 300, 200); // Display bowl1
      }
      else if(num_collected == 2){
        // Display the bowl, centered
        image(bowl_02, 300, 300 - 150, 300, 200); // Display bowl2
      }
      else if(num_collected == 3){
        // Display the bowl, centered
        image(bowl_03, 300, 300 - 150, 300, 200); // Display bowl3
      }

      // Draw a button, centered
      fill("#74433d");
      rect(350, 400, 200, 40, 10, 10, 10, 10);

      // Display the text on the button
      fill(255); // Change the text color to black
      textSize(16); // Set the text size
      text("Visit Bob", 420, 425); // Display the text on the button

      // If the button is clicked, redirect to another HTML page
      if (
        mouseX > 350 &&
        mouseX < 350 + 200 &&
        mouseY > 400 &&
        mouseY < 400 + 40 &&
        mouseIsPressed
      ) {
        window.location.href = "../html/return/visit_bob.html"; 
      }
    } else {
      textSize(32); // Set the text size
      text("... cooking in progress", 100, 100); // Display the text

      // Calculate the remaining time in seconds
      let timeLeft = 5 - Math.floor((millis() - cookingStartTime) / 1000);

      // Display the remaining time
      text("Time left: " + timeLeft + " seconds", 100, 200);
    }
  }
}

function mousePressed() {
  apple.handleMousePressed();
  pineapple.handleMousePressed();
  honey.handleMousePressed();

  spoon.handleMousePressed();
  knife.handleMousePressed();
  fire.handleMousePressed();
}

function mouseReleased() {
  apple.handleMouseReleased();
  pineapple.handleMouseReleased();
  honey.handleMouseReleased();

  spoon.handleMouseReleased();
  knife.handleMouseReleased();
  fire.handleMouseReleased();
}

class InteractiveImage {
  constructor(image, posX, posY, width, height) {
    this.image = image;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.isDragging = false;
    this.isHovered = false;
    this.dragOffsetX = 0;
    this.dragOffsetY = 0;
  }

  //hide the image
  hide() {
    this.image = none.image;
    this.posX = 0;
    this.posY = 0;
  }

  //display the image
  display() {
    if (
      mouseX > this.posX &&
      mouseX < this.posX + this.width &&
      mouseY > this.posY &&
      mouseY < this.posY + this.height
    ) {
      this.isHovered = true;
      image(
        this.image,
        this.posX - 2.5,
        this.posY - 2.5,
        this.width + 5,
        this.height + 5
      );
    } else {
      this.isHovered = false;
      image(this.image, this.posX, this.posY, this.width, this.height);
    }
  }

  handleMousePressed() {
    if (
      mouseX > this.posX &&
      mouseX < this.posX + this.width &&
      mouseY > this.posY &&
      mouseY < this.posY + this.height
    ) {
      this.isDragging = true;
      this.dragOffsetX = this.posX - mouseX;
      this.dragOffsetY = this.posY - mouseY;
    }
  }

  handleMouseDrag() {
    if (this.isDragging) {
      this.posX = mouseX + this.dragOffsetX;
      this.posY = mouseY + this.dragOffsetY;
    }
  }

  handleMouseReleased() {
    this.isDragging = false;
  }
}
