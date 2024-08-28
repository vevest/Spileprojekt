window.addEventListener("load", titleScreen);
window.addEventListener("resize", windowResize);
console.log("dit javaScript virker");

let points1;
let points2;
let points3;
let points4;
let points5;
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
    points1  = 0;
    points2  = 0;
    points3  = 0;
    points4  = 0;
    points5  = 0;

  hideAllScreens();
 
  console.log("funktionen startSpil");

  document.querySelector("#baggrunds-lyd").volume = 0.2;
  document.querySelector("#baggrunds-lyd").play();

  //------------------------------- Timer animation
  //Starter timer-animationen på masken
  document.querySelector("#timer-fill").classList.add("shrink");

  // når timeranimationen er færdig kaldes funktionen stopSpillet()
  document.querySelector("#timer-fill").addEventListener("animationend", stopSpillet);



  // ---------------------------- Adding classes to containers
  rndposition = generateRandomPosition(3);
  document.querySelector("#adobe_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#adobe_container").classList.add("delay" + rnddelay);
  document.querySelector("#adobe_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#beer_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#beer_container").classList.add("delay" + rnddelay);
  document.querySelector("#beer_container").classList.add("bounce");

  


  //Lytter efter om op_ned-animationen har kørt 1 gang
  document.querySelector("#adobe_container").addEventListener("animationiteration", resetAdobe);
  document.querySelector("#beer_container").addEventListener("animationiteration", resetBeer);
  

  // Adding eventlisteners to objects
  document.querySelector("#adobe_container").addEventListener("mousedown", clickAdobe);
  document.querySelector("#beer_container").addEventListener("mousedown", clickBeer);
}

// ---------------------------- Adobe ----------------------------
function clickAdobe() {
  console.log("funktionen clickAdobe");

  document.querySelector("#adobe_container").removeEventListener("mousedown", clickAdobe);

  document.querySelector("#adobe_container").classList.add("frys");
  document.querySelector("#adobe_sprite").classList.add("zoom");
    document.querySelector("#sådan").play();

  document.querySelector("#adobe_container").addEventListener("animationend", resetAdobe);

  addPoints1();
 
}

function resetAdobe() {
  console.log("funktion resetAdobe");
  // den opfatter når aniamtionerne fra "click" er færdige
  document.querySelector("#adobe_container").removeEventListener("animationend", resetAdobe);

  // fjerner alle klasser fra container og sprite
  document.querySelector("#adobe_container").classList = "";
  document.querySelector("#adobe_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#adobe_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#adobe_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#adobe_container").classList.add("pos" + rndposition);

  document.querySelector("#adobe_container").addEventListener("mousedown", clickAdobe);
}

// ---------------------------- Beer ----------------------------
function clickBeer() {
  console.log("funktionen clickBeer");
  document.querySelector("#beer_container").removeEventListener("mousedown", clickBeer);
  document.querySelector("#beer_container").classList.add("frys");
  document.querySelector("#beer_sprite").classList.add("zoom");
  
  document.querySelector("#fedt").play();

  document.querySelector("#beer_container").addEventListener("animationend", resetBeer);

  addPoints5();

}

function resetBeer() {
  console.log("funktion resetBeer");
  // den opfatter når animationerne fra "click" er færdige
  document.querySelector("#beer_container").removeEventListener("animationend", resetBeer);

  // fjerner alle klasser fra container
  document.querySelector("#beer_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#beer_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#beer_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#beer_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#beer_container").classList.add("pos" + rndposition);

  document.querySelector("#beer_container").addEventListener("mousedown", clickBeer);
}



// ------------------------------ Stop Spillet ------------------------------
function stopSpillet() {
  console.log("Funktionen stopSpillet");
  hideAllScreens();
  document.querySelector("#level_complete1").classList.remove("#hide");

  document.querySelector("#baggrunds-lyd").pause();
  document.querySelector("#baggrunds-lyd").currentTime = 0;

  document.querySelector("#timer-fill").classList = "";
  document.querySelector("#timer-fill").removeEventListener("animationend", stopSpillet);

  // fjerner alle klasser fra container
  document.querySelector("#adobe_container").classList = "";
  document.querySelector("#beer_container").classList = "";

  // fjerner alle klasser fra sprite
  document.querySelector("#adobe_sprite").classList = "";
  document.querySelector("#beer_sprite").classList = "";

  // fjerner alle eventListeners
  document.querySelector("#adobe_sprite").removeEventListener("mousedown", clickAdobe);
  document.querySelector("#beer_sprite").removeEventListener("mousedown", clickBeer);
  
  document.querySelector("#adobe_container").removeEventListener("animationend", addOnePoint);
  document.querySelector("#beer_container").removeEventListener("animationend", addOnePoint);
  

  if (points1 > 4) {
    levelComplete1();
  } else if (points2 > 4) {
    levelComplete2();
  } else if (points3 > 4) {
    levelComplete3();
  } else if (points4 > 4) {
    levelComplete4();
  }  else 
    levelComplete5();
  }




function levelComplete1() {
  console.log("Funktionen levelComplete1");
  document.querySelector("#level_complete1").classList.remove("hide");
  document.querySelector("#play_again1").classList.add("pulse");
  document.querySelector("#play_again1").addEventListener("click", startSpil);
}

function levelComplete2() {
    console.log("Funktionen levelComplete2");
    document.querySelector("#level_complete2").classList.remove("hide");
    document.querySelector("#play_again2").classList.add("pulse");
    document.querySelector("#play_again2").addEventListener("click", startSpil);
  }

function levelComplete3() {
    console.log("Funktionen levelComplete3");
    document.querySelector("#level_complete3").classList.remove("hide");
    document.querySelector("#play_again3").classList.add("pulse");
    document.querySelector("#play_again3").addEventListener("click", startSpil);
  }

function levelComplete4() {
    console.log("Funktionen levelComplete4");
    document.querySelector("#level_complete4").classList.remove("hide");
    document.querySelector("#play_again4").classList.add("pulse");
    document.querySelector("#play_again4").addEventListener("click", startSpil);
  }

function levelComplete5() {
    console.log("Funktionen levelComplete5");
    document.querySelector("#level_complete5").classList.remove("hide");
    document.querySelector("#play_again5").classList.add("pulse");
    document.querySelector("#play_again").addEventListener("click", startSpil);
  }

// --------------------------------- Points ---------------------------------

function addPoints1() {
  points = points + 1;
}

function addPoints2() {
    points = points + 1;
  }

function addPoints3() {
    points = points + 1;
  }

function addPoints4() {
    points = points + 1;
  }


function addPoints5() {
    points = points + 1;
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
  document.querySelector("#level_complete1").classList.add("hide");
  document.querySelector("#level_complete2").classList.add("hide");
  document.querySelector("#level_complete3").classList.add("hide");
  document.querySelector("#level_complete4").classList.add("hide");
  document.querySelector("#level_complete5").classList.add("hide");
  document.querySelector("#title_screen").classList.add("hide");
  document.querySelector("#instructions").classList.add("hide");
}

function windowResize() {
  let widthScreen = document.querySelector("#screen").clientWidth;

  
}
