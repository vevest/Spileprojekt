window.addEventListener("load", titleScreen);
window.addEventListener("resize", windowResize);
console.log("dit javaScript virker");


let rndposition;
// rndposition = generateRandomPosition(3);
let rnddelay;
// rnddelay = generateRandomDelay(4);

// ----------------------------- Start spillet -----------------------------
function titleScreen() {
  console.log("vis titel skærm");
  windowResize();
  hideAllScreens();
  document.querySelector("#title_screen").classList.remove("hide");
  document.querySelector("#play_game1").classList.add("pulse");
  document.querySelector("#play_game1").addEventListener("click", showInstructions);

  document.querySelector("#velkommen").volume = 1;
  document.querySelector("#velkommen").play();

}
function showInstructions() {
  console.log("showInstructions");
  hideAllScreens();
  document.querySelector("#instructions").classList.remove("hide");
  document.querySelector("#play_game2").classList.add("pulse");
  document.querySelector("#play_game2").addEventListener("click", startSpil);

  document.querySelector("#fang-kompetencer").volume = 1;
  document.querySelector("#fang-kompetencer").play();
}

function startSpil() {
//   points = 0;
//   lives = 3;
//   printPoints();
//   printLives();
  hideAllScreens();
  console.log("funktionen startSpil");

  document.querySelector("#baggrunds_lyd").volume = 0.5;
  document.querySelector("#baggrunds_lyd").play();

  //Starter timer-animationen på masken
  document.querySelector("#timer-fill").classList.add("shrink");

  // når timeranimationen er færdig kaldes funktionen stopSpillet()
  document.querySelector("#timer-fill").addEventListener("animationend", stopSpillet);

  // Adding classes to containers
  rndposition = generateRandomPosition(6);
  document.querySelector("#white_dandelion_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#white_dandelion_container").classList.add("delay" + rnddelay);
  document.querySelector("#white_dandelion_container").classList.add("hop");

  rndposition = generateRandomPosition(6);
  document.querySelector("#sprout_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#sprout_container").classList.add("delay" + rnddelay);
  document.querySelector("#sprout_container").classList.add("hop");

  rndposition = generateRandomPosition(6);
  document.querySelector("#yellow_dandelion_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#yellow_dandelion_container").classList.add("delay" + rnddelay);
  document.querySelector("#yellow_dandelion_container").classList.add("hop");

  //Lytter efter om op_ned-animationen har kørt 1 gang
  document.querySelector("#white_dandelion_container").addEventListener("animationiteration", resetWhiteDandelion);
  document.querySelector("#yellow_dandelion_container").addEventListener("animationiteration", resetYellowDandelion);
  document.querySelector("#sprout_container").addEventListener("animationiteration", resetSprout);

  // Adding eventlisteners to objects
  document.querySelector("#white_dandelion_container").addEventListener("mousedown", clickWhiteDandelion);
  document.querySelector("#sprout_container").addEventListener("mousedown", clickSprout);
  document.querySelector("#yellow_dandelion_container").addEventListener("mousedown", clickYellowDandelion);
}

// ---------------------------- White Dandelion ----------------------------
function clickWhiteDandelion() {
  console.log("funktionen clickWhiteDandelion");

  document.querySelector("#white_dandelion_container").removeEventListener("mousedown", clickWhiteDandelion);

  document.querySelector("#white_dandelion_container").classList.add("frys");
  document.querySelector("#white_dandelion_sprite").classList.add("pop");
  document.querySelector("#god_lyd1").play();

  document.querySelector("#white_dandelion_container").addEventListener("animationend", resetWhiteDandelion);

  addTwoPoints();
  printPoints();
}

function resetWhiteDandelion() {
  console.log("funktion resetWhiteDandelion");
  // den opfatter når aniamtionerne fra "click" er færdige
  document.querySelector("#white_dandelion_container").removeEventListener("animationend", resetWhiteDandelion);

  // fjerner alle klasser fra container og sprite
  document.querySelector("#white_dandelion_container").classList = "";
  document.querySelector("#white_dandelion_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#white_dandelion_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#white_dandelion_container").classList.add("hop");

  rndposition = generateRandomPosition(6);
  document.querySelector("#white_dandelion_container").classList.add("pos" + rndposition);

  document.querySelector("#white_dandelion_container").addEventListener("mousedown", clickWhiteDandelion);
}

// ---------------------------- Yellow Dandelion ----------------------------
function clickYellowDandelion() {
  console.log("funktionen clickYellowDandelion");
  document.querySelector("#yellow_dandelion_container").removeEventListener("mousedown", clickYellowDandelion);
  document.querySelector("#yellow_dandelion_container").classList.add("frys");
  document.querySelector("#yellow_dandelion_sprite").classList.add("wiggle");
  document.querySelector("#god_lyd2").play();

  document.querySelector("#yellow_dandelion_container").addEventListener("animationend", resetYellowDandelion);

  addOnePoint();
  printPoints();
}

function resetYellowDandelion() {
  console.log("funktion resetYellowDandelion");
  // den opfatter når aniamtionerne fra "click" er færdige
  document.querySelector("#yellow_dandelion_container").removeEventListener("animationend", resetYellowDandelion);

  // fjerner alle klasser fra container
  document.querySelector("#yellow_dandelion_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#yellow_dandelion_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#yellow_dandelion_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#yellow_dandelion_container").classList.add("hop");

  rndposition = generateRandomPosition(6);
  document.querySelector("#yellow_dandelion_container").classList.add("pos" + rndposition);

  document.querySelector("#yellow_dandelion_container").addEventListener("mousedown", clickYellowDandelion);
}

// --------------------------------- Sprout ---------------------------------
function clickSprout() {
  console.log("funktionen clickSprout");
  document.querySelector("#sprout_container").removeEventListener("mousedown", clickSprout);
  document.querySelector("#sprout_container").classList.add("frys");
  document.querySelector("#sprout_sprite").classList.add("wiggle");
  document.querySelector("#no_lyd").play();

  // er det her korrekt?????
  document.querySelector("#sprout_container").addEventListener("animationend", removeLife);

  removeLife();
  printLives();

  if (lives < 1) {
    stopSpillet();
  } else {
    resetSprout();
  }
}

function resetSprout() {
  console.log("funktion resetSprout");

  document.querySelector("#sprout_container").removeEventListener("animationend", resetSprout);

  document.querySelector("#sprout_container").classList = "";
  document.querySelector("#sprout_sprite").classList = "";

  document.querySelector("#sprout_sprite").offsetLeft;

  document.querySelector("#sprout_container").classList.add("hop");

  rndposition = generateRandomPosition(6);
  document.querySelector("#sprout_container").classList.add("pos" + rndposition);

  document.querySelector("#sprout_container").addEventListener("mousedown", clickSprout);
}

// ------------------------------ Stop Spillet ------------------------------
function stopSpillet() {
  console.log("Funktionen stopSpillet");
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("#hide");

  document.querySelector("#baggrunds_lyd").pause();
  document.querySelector("#baggrunds_lyd").currentTime = 0;

  document.querySelector("#vand").classList = "";
  document.querySelector("#vand").removeEventListener("animationend", stopSpillet);

  // fjerner alle klasser fra container
  document.querySelector("#white_dandelion_container").classList = "";
  document.querySelector("#yellow_dandelion_container").classList = "";
  document.querySelector("#sprout_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#white_dandelion_sprite").classList = "";
  document.querySelector("#yellow_dandelion_sprite").classList = "";
  document.querySelector("#sprout_sprite").classList = "";
  // fjerner alle eventListeners
  document.querySelector("#white_dandelion_sprite").removeEventListener("mousedown", clickWhiteDandelion);
  document.querySelector("#yellow_dandelion_sprite").removeEventListener("mousedown", clickYellowDandelion);
  document.querySelector("#sprout_sprite").removeEventListener("mousedown", clickSprout);
  document.querySelector("#white_dandelion_container").removeEventListener("animationend", addOnePoint);
  document.querySelector("#yellow_dandelion_container").removeEventListener("animationend", addOnePoint);
  document.querySelector("#sprout_container").removeEventListener("animationend", removeLife);

  if (lives <= 0) {
    gameOver();
  } else if (points >= 20) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("Funktionen gameOver");
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#play_again1").classList.add("pulse");
  document.querySelector("#play_again1").addEventListener("click", startSpil);
}

function levelComplete() {
  console.log("Funktionen levelComplete");
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#play_again2").classList.add("pulse");
  document.querySelector("#play_again2").addEventListener("click", startSpil);
}

// --------------------------------- Points ---------------------------------
function addTwoPoints() {
  points = points + 2;
}

function addOnePoint() {
  points = points + 1;
}

function printPoints() {
  document.querySelector("#points").textContent = points;
}

// --------------------------------- lives ---------------------------------
function removeLife() {
  lives = lives - 1;
}
function printLives() {
  document.querySelector("#lives").textContent = lives;
}

// -------------------------------- Position --------------------------------
function generateRandomPosition(max) {
  return Math.floor(Math.random() * max) + 1;
}

function generateRandomDelay(max) {
  return Math.floor(Math.random() * max) + 1;
}

function hideAllScreens() {
  console.log("hideAllScreens");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#title_screen").classList.add("hide");
  document.querySelector("#instructions").classList.add("hide");
}

function windowResize() {
  let widthScreen = document.querySelector("#screen").clientWidth;

  let myFontInProcent1 = 5;
  let myFont1 = (widthScreen / 100) * myFontInProcent1;
  document.querySelector("#lives").style.fontSize = myFont1 + "px";

  let myFontInProcent2 = 5;
  let myFont2 = (widthScreen / 100) * myFontInProcent2;
  document.querySelector("#points").style.fontSize = myFont2 + "px";
}
