window.addEventListener("load", titleScreen);
window.addEventListener("resize", windowResize);
console.log("dit javaScript virker");

let points;
let lives;
let rndposition;
// rndposition = generateRandomPosition(4);
let rnddelay;
// rnddelay = generateRandomDelay(4);

// ----------------------------- Start spillet -----------------------------
function titleScreen() {
  console.log("vis titel skærm");
  windowResize();
  hideAllScreens();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#play_game1").classList.add("pulse");
  document.querySelector("#play_game1").addEventListener("click", startSpil);
}

function startSpil() {
  points = 0;
  lives = 3;
  printPoints();
  printLives();
  hideAllScreens();
  console.log("funktionen startSpil");
}

  //Starter timer-animationen på fill
  document.querySelector("#penis_fill").classList.add("penistimer");

  // når timeranimationen er færdig kaldes funktionen stopSpillet()
  document.querySelector("#penis_fill").addEventListener("animationend", stopSpillet);

 // giver mine containere forskellige ting de skal gøre
 rndposition = generateRandomPosition(4);
  document.querySelector("#diaper_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#diaper_container").classList.add("delay" + rnddelay);
  document.querySelector("#diaper_container").classList.add("bounce");

  rndposition = generateRandomPosition(4);
  document.querySelector("#panty_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#panty_container").classList.add("delay" + rnddelay);
  document.querySelector("#panty_container").classList.add("bounce")

  rndposition = generateRandomPosition(4);
  document.querySelector("#gebis_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#gebis_container").classList.add("delay" + rnddelay);
  document.querySelector("#gebis_container").classList.add("bounce")


  // js skal starte forfra når mine containere har køre "bounce" en omgang
   document.querySelector("#diaper_container").addEventListener("animationiteration", resetDiaper);
   document.querySelector("#panty_container").addEventListener("animationiteration", resetPanty);
   document.querySelector("#gebis_container").addEventListener("animationiteration", resetGebis);

  // Man skal kunne trykke på dem igen
  document.querySelector("#diaper_container").addEventListener("mousedown", clickDiaper);
  document.querySelector("#panty_container").addEventListener("mousedown", clickPanty);
  document.querySelector("#gebis_container").addEventListener("mousedown", clickGebis);








// ---Hvad der skal ske med diaper når den klikkes på -----
function clickDiaper() {
  console.log("funktionen clickDiaper");
  document.querySelector("#diaper_container").removeEventListener("mousedown", clickDiaper);
  document.querySelector("#diaper_container").classList.add("frys");
  document.querySelector("#diaper_sprite").classList.add("rotation");

  // er det her korrekt?????
  document.querySelector("#diaper_container").addEventListener("animationend", removeLife);

  removeLife();
  printLives();

  if (lives < 1) {
    stopSpillet();
  } else {
    resetDiaper();
  }
}

function resetDiaper() {
  console.log("funktion resetDiaper");

  document.querySelector("#diaper_container").removeEventListener("animationend", resetDiaper);

  document.querySelector("#diaper_container").classList = "";
  document.querySelector("#diaper_sprite").classList = "";

  document.querySelector("#diaper_sprite").offsetLeft;

  document.querySelector("#diaper_container").classList.add("bounce");

  rndposition = generateRandomPosition(4);
  document.querySelector("#diaper_container").classList.add("pos" + rndposition);

  document.querySelector("#diaper_container").addEventListener("mousedown", clickDiaper);
}




// -------Hvad der skal ske når der klikkes på panty ----------------------------
function clickPanty() {
  console.log("funktionen clickPanty");
  document.querySelector("#panty_container").removeEventListener("mousedown", clickPanty);
  document.querySelector("#panty_container").classList.add("frys");
  document.querySelector("#panty_sprite").classList.add("zoom_in");

  document.querySelector("#panty_container").addEventListener("animationend", resetPanty);

  addOnePoint();
  printPoints();
}

function resetPanty() {
  console.log("funktion resetPanty");
  // dette starter når js ser at aniamtionerne fra "click" er færdige
  document.querySelector("#panty_container").removeEventListener("animationend", resetPanty);

  // fjerner alle klasser fra containeren
  document.querySelector("#panty_container").classList = "";
  // fjerner alle klasser fra spriten
  document.querySelector("#panty_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#panty_sprite").offsetLeft;

  // giver containeren min bounce animation og en ny position
  document.querySelector("#panty_container").classList.add("bounce");

  rndposition = generateRandomPosition(4);
  document.querySelector("#panty_container").classList.add("pos" + rndposition);

  document.querySelector("#panty_container").addEventListener("mousedown", clickPanty);
}




// ---Hvad der skal ske med Gebis når den klikkes på -----
function clickGebis() {
  console.log("funktionen clickGebis");
  document.querySelector("#gebis_container").removeEventListener("mousedown", clickGebis);
  document.querySelector("#gebis_container").classList.add("frys");
  document.querySelector("#gebis_sprite").classList.add("rotation");

  // er det her korrekt?????
  document.querySelector("#gebis_container").addEventListener("animationend", removeLife);

  removeLife();
  printLives();

  if (lives < 1) {
    stopSpillet();
  } else {
    resetGebis();
  }
}

function resetGebis() {
  console.log("funktion resetGebis");

  document.querySelector("#gebis_container").removeEventListener("animationend", resetGebis);

  document.querySelector("#gebis_container").classList = "";
  document.querySelector("#gebis_sprite").classList = "";

  document.querySelector("#gebis_sprite").offsetLeft;

  document.querySelector("#gebis_container").classList.add("bounce");

  rndposition = generateRandomPosition(4);
  document.querySelector("#gebis_container").classList.add("pos" + rndposition);

  document.querySelector("#gebis_container").addEventListener("mousedown", clickGebis);
}




// ------------------------------ Hvordan man kan ende Spillet ------------------------------
function stopSpillet() {
  console.log("Funktionen stopSpillet");
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("#hide");


  document.querySelector("#penis_fill").classList = "";
  document.querySelector("#penis_fill").removeEventListener("animationend", stopSpillet);

  // fjerner alle klasser fra container
  document.querySelector("#diaper_container").classList = "";
  document.querySelector("#panty_container").classList = "";
  document.querySelector("#gebis_container").classList = "";


  // fjerner alle klasser fra sprite
  document.querySelector("#diaper_sprite").classList = "";
  document.querySelector("#panty_sprite").classList = "";
  document.querySelector("#gebis_sprite").classList = "";


  // fjerner alle eventListeners
  document.querySelector("#diaper_sprite").removeEventListener("mousedown", clickDiaper);
  document.querySelector("#panty_sprite").removeEventListener("mousedown", clickPanty);
  document.querySelector("#gebis_sprite").removeEventListener("mousedown", clickGebis);
  document.querySelector("#diaper_container").removeEventListener("animationend", removeLife);
  document.querySelector("#panty_container").removeEventListener("animationend", addOnePoint);
  document.querySelector("#gebis_container").removeEventListener("animationend", removeLife);

  if (lives <= 0) {
    gameOver();
  } else if (points >= 4) {
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
  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#play_again2").classList.add("pulse");
  document.querySelector("#play_again2").addEventListener("click", startSpil);
  
}



// --------------------------------- Points & lives ---------------------------------
function addOnePoint() {
  points = points + 1;
}

function printPoints() {
  document.querySelector("#points").textContent = points;
}


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
  document.querySelector("#start").classList.add("hide");
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










