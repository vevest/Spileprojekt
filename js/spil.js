window.addEventListener("load", titleScreen);
window.addEventListener("resize", windowResize);
console.log("dit javaScript virker");

let points;

let rndposition;
// rndposition = generateRandomPosition(3);
let rnddelay;
// rnddelay = generateRandomDelay(4);

// ----------------------------- Start spillet -----------------------------
function titleScreen() {
  console.log("vis titel skærm");
  windowResize();
  hideAllScreens();

  document.querySelector("#mortenskyllinger_screen").classList.remove("hide");
  document.querySelector("#play_game").classList.add("pulse");
  document.querySelector("#play_game").addEventListener("click", getInstructions);

}

function getInstructions() {
    console.log("getInstructions");
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
  document.querySelector("#timer-fill").classList.remove("shrink");

  document.querySelector("#fang-kompetencer").volume = 1;
  document.querySelector("#fang-kompetencer").play();
}

function startSpil() {
  points1 = 0;
  points2 = 0;
  points3 = 0;
  points4 = 0;

  hideAllScreens();
 
  console.log("funktionen startSpil");

  document.querySelector("#baggrunds-lyd").volume = 0.1;
  document.querySelector("#baggrunds-lyd").play();

  startTimer();

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

  rndposition = generateRandomPosition(3);
  document.querySelector("#figma_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#figma_container").classList.add("delay" + rnddelay);
  document.querySelector("#figma_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#diagram_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#diagram_container").classList.add("delay" + rnddelay);
  document.querySelector("#diagram_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#zip_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#zip_container").classList.add("delay" + rnddelay);
  document.querySelector("#zip_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#fail_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#fail_container").classList.add("delay" + rnddelay);
  document.querySelector("#fail_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#loop_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#loop_container").classList.add("delay" + rnddelay);
  document.querySelector("#loop_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#tale_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#tale_container").classList.add("delay" + rnddelay);
  document.querySelector("#tale_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#pillow_container").classList = "pos" + rndposition;
  rnddelay = generateRandomDelay(4);
  document.querySelector("#pillow_container").classList.add("delay" + rnddelay);
  document.querySelector("#pillow_container").classList.add("bounce");
  


  //Lytter efter om op_ned-animationen har kørt 1 gang
  document.querySelector("#adobe_container").addEventListener("animationiteration", resetAdobe);
  document.querySelector("#beer_container").addEventListener("animationiteration", resetBeer);
  document.querySelector("#figma_container").addEventListener("animationiteration", resetFigma);
  document.querySelector("#diagram_container").addEventListener("animationiteration", resetDiagram);
  document.querySelector("#zip_container").addEventListener("animationiteration", resetZip);
  document.querySelector("#fail_container").addEventListener("animationiteration", resetFail);
  document.querySelector("#loop_container").addEventListener("animationiteration", resetLoop);
  document.querySelector("#tale_container").addEventListener("animationiteration", resetTale);
  document.querySelector("#pillow_container").addEventListener("animationiteration", resetPillow);

  

  // Adding eventlisteners to objects
  document.querySelector("#adobe_container").addEventListener("mousedown", clickAdobe);
  document.querySelector("#beer_container").addEventListener("mousedown", clickBeer);
  document.querySelector("#figma_container").addEventListener("mousedown", clickFigma);
  document.querySelector("#diagram_container").addEventListener("mousedown", clickDiagram);
  document.querySelector("#zip_container").addEventListener("mousedown", clickZip);
  document.querySelector("#fail_container").addEventListener("mousedown", clickFail);
  document.querySelector("#loop_container").addEventListener("mousedown", clickLoop);
  document.querySelector("#tale_container").addEventListener("mousedown", clickTale);
  document.querySelector("#pillow_container").addEventListener("mousedown", clickPillow);

}

//-------Start-timer funktion, så timer først starter efter mortens instruktioner
function startTimer() {
  console.log("Starter timeren");

    // Sørg for, at timeren ikke har nogen aktive animationer fra før
    document.querySelector("#timer-fill").classList.remove("shrink", "shrink-reverse");

    // Tilføj timer-animationen igen
    document.querySelector("#timer-fill").classList.add("shrink");

    // Når animationen slutter, kaldes stopSpillet()
    document.querySelector("#timer-fill").addEventListener("animationend", stopSpillet);
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
    // den opfatter når animationerne fra "click" er færdige
    document.querySelector("#adobe_container").removeEventListener("animationend", resetAdobe);
  
    // fjerner alle klasser fra container
    document.querySelector("#adobe_container").classList = "";
    // fjerner alle klasser fra sprite
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
  
  document.querySelector("#glem-ikke-hyggen").play();

  document.querySelector("#beer_container").addEventListener("animationend", resetBeer);

  addPoints4();

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

// ---------------------------- Figma ----------------------------
function clickFigma() {
    console.log("funktionen clickFigma");
    document.querySelector("#figma_container").removeEventListener("mousedown", clickFigma);
    document.querySelector("#figma_container").classList.add("frys");
    document.querySelector("#figma_sprite").classList.add("zoom");
    
    document.querySelector("#hype").play();
  
    document.querySelector("#figma_container").addEventListener("animationend", resetFigma);
  
    addPoints1();
  
  }
  
  function resetFigma() {
    console.log("funktion resetFigma");
    // den opfatter når animationerne fra "click" er færdige
    document.querySelector("#figma_container").removeEventListener("animationend", resetFigma);
  
    // fjerner alle klasser fra container
    document.querySelector("#figma_container").classList = "";
    // fjerner alle klasser fra sprite
    document.querySelector("#figma_sprite").classList = "";
  
    // giver browser en tænkepause inden den nye animation
    document.querySelector("#figma_sprite").offsetLeft;
  
    // giver container flyveanimationen og en ny position
    document.querySelector("#figma_container").classList.add("bounce");
  
    rndposition = generateRandomPosition(3);
    document.querySelector("#figma_container").classList.add("pos" + rndposition);
  
    document.querySelector("#figma_container").addEventListener("mousedown", clickFigma);
  }
  

  // ---------------------------- Diagram ----------------------------
function clickDiagram() {
    console.log("funktionen clickDiagram");
    document.querySelector("#diagram_container").removeEventListener("mousedown", clickDiagram);
    document.querySelector("#diagram_container").classList.add("frys");
    document.querySelector("#diagram_sprite").classList.add("zoom");
    
    document.querySelector("#fedt").play();
  
    document.querySelector("#diagram_container").addEventListener("animationend", resetDiagram);
  
    addPoints3();
  
  }
  
  function resetDiagram() {
    console.log("funktion resetDiagram");
    // den opfatter når animationerne fra "click" er færdige
    document.querySelector("#diagram_container").removeEventListener("animationend", resetDiagram);
  
    // fjerner alle klasser fra container
    document.querySelector("#diagram_container").classList = "";
    // fjerner alle klasser fra sprite
    document.querySelector("#diagram_sprite").classList = "";
  
    // giver browser en tænkepause inden den nye animation
    document.querySelector("#diagram_sprite").offsetLeft;
  
    // giver container flyveanimationen og en ny position
    document.querySelector("#diagram_container").classList.add("bounce");
  
    rndposition = generateRandomPosition(3);
    document.querySelector("#diagram_container").classList.add("pos" + rndposition);
  
    document.querySelector("#diagram_container").addEventListener("mousedown", clickDiagram);
  }
  

  // ---------------------------- Zip ----------------------------
function clickZip() {
    console.log("funktionen clickZip");
    document.querySelector("#zip_container").removeEventListener("mousedown", clickZip);
    document.querySelector("#zip_container").classList.add("frys");
    document.querySelector("#zip_sprite").classList.add("zoom");
    
    document.querySelector("#sådan").play();
  
    document.querySelector("#zip_container").addEventListener("animationend", resetZip);
  
    addPoints2();
  
  }
  
  function resetZip() {
    console.log("funktion resetZip");
    // den opfatter når animationerne fra "click" er færdige
    document.querySelector("#zip_container").removeEventListener("animationend", resetZip);
  
    // fjerner alle klasser fra container
    document.querySelector("#zip_container").classList = "";
    // fjerner alle klasser fra sprite
    document.querySelector("#zip_sprite").classList = "";
  
    // giver browser en tænkepause inden den nye animation
    document.querySelector("#zip_sprite").offsetLeft;
  
    // giver container flyveanimationen og en ny position
    document.querySelector("#zip_container").classList.add("bounce");
  
    rndposition = generateRandomPosition(3);
    document.querySelector("#zip_container").classList.add("pos" + rndposition);
  
    document.querySelector("#zip_container").addEventListener("mousedown", clickZip);
  }

  // ---------------------------- Fail ----------------------------
function clickFail() {
  console.log("funktionen clickFail");
  document.querySelector("#fail_container").removeEventListener("mousedown", clickFail);
  document.querySelector("#fail_container").classList.add("frys");
  document.querySelector("#fail_sprite").classList.add("zoom");
  
  document.querySelector("#glem-ikke-hyggen").play();

  document.querySelector("#fail_container").addEventListener("animationend", resetFail);

  addPoints4();

}

function resetFail() {
  console.log("funktion resetFail");
  // den opfatter når animationerne fra "click" er færdige
  document.querySelector("#fail_container").removeEventListener("animationend", resetFail);

  // fjerner alle klasser fra container
  document.querySelector("#fail_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#fail_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#fail_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#fail_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#fail_container").classList.add("pos" + rndposition);

  document.querySelector("#fail_container").addEventListener("mousedown", clickFail);
}

// ---------------------------- Loop ----------------------------
function clickLoop() {
  console.log("funktionen clickLoop");
  document.querySelector("#loop_container").removeEventListener("mousedown", clickLoop);
  document.querySelector("#loop_container").classList.add("frys");
  document.querySelector("#loop_sprite").classList.add("zoom");
  
  document.querySelector("#sådan").play();

  document.querySelector("#loop_container").addEventListener("animationend", resetLoop);

  addPoints3();

}

function resetLoop() {
  console.log("funktion resetLoop");
  // den opfatter når animationerne fra "click" er færdige
  document.querySelector("#loop_container").removeEventListener("animationend", resetLoop);

  // fjerner alle klasser fra container
  document.querySelector("#loop_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#loop_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#loop_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#loop_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#loop_container").classList.add("pos" + rndposition);

  document.querySelector("#loop_container").addEventListener("mousedown", clickLoop);
}

// ---------------------------- Tale ----------------------------
function clickTale() {
  console.log("funktionen clickTale");
  document.querySelector("#tale_container").removeEventListener("mousedown", clickTale);
  document.querySelector("#tale_container").classList.add("frys");
  document.querySelector("#tale_sprite").classList.add("zoom");
  
  document.querySelector("#fedt").play();

  document.querySelector("#tale_container").addEventListener("animationend", resetTale);

  addPoints3();

}

function resetTale() {
  console.log("funktion resetTale");
  // den opfatter når animationerne fra "click" er færdige
  document.querySelector("#tale_container").removeEventListener("animationend", resetTale);

  // fjerner alle klasser fra container
  document.querySelector("#tale_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#tale_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#tale_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#tale_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#tale_container").classList.add("pos" + rndposition);

  document.querySelector("#tale_container").addEventListener("mousedown", clickTale);
}

// ---------------------------- Pillow ----------------------------
function clickPillow() {
  console.log("funktionen clickPillow");
  document.querySelector("#pillow_container").removeEventListener("mousedown", clickPillow);
  document.querySelector("#pillow_container").classList.add("frys");
  document.querySelector("#pillow_sprite").classList.add("zoom");
  
  document.querySelector("#glem-ikke-hyggen").play();

  document.querySelector("#pillow_container").addEventListener("animationend", resetPillow);

  addPoints4();

}

function resetPillow() {
  console.log("funktion resetPillow");
  // den opfatter når animationerne fra "click" er færdige
  document.querySelector("#pillow_container").removeEventListener("animationend", resetPillow);

  // fjerner alle klasser fra container
  document.querySelector("#pillow_container").classList = "";
  // fjerner alle klasser fra sprite
  document.querySelector("#pillow_sprite").classList = "";

  // giver browser en tænkepause inden den nye animation
  document.querySelector("#pillow_sprite").offsetLeft;

  // giver container flyveanimationen og en ny position
  document.querySelector("#pillow_container").classList.add("bounce");

  rndposition = generateRandomPosition(3);
  document.querySelector("#pillow_container").classList.add("pos" + rndposition);

  document.querySelector("#pillow_container").addEventListener("mousedown", clickPillow);
}



// ------------------------------ Stop Spillet ------------------------------
function stopSpillet() {
  console.log("Funktionen stopSpillet");
    hideAllScreens();
    document.querySelector("#baggrunds-lyd").pause();
    document.querySelector("#baggrunds-lyd").currentTime = 0;

    document.querySelector("#timer-fill").classList = "";
    document.querySelector("#timer-fill").removeEventListener("animationend", stopSpillet);
    document.querySelector("#timer-fill").classList.remove("shrink");
    document.querySelector("#timer-fill").removeEventListener("animationend", stopSpillet);


    // Fjern klasser fra containere og sprites
    let containers = ["#adobe_container", "#beer_container", "#figma_container", "#diagram_container", "#zip_container", "#fail_container", "#loop_container", "#tale_container", "#pillow_container"];
    let sprites = ["#adobe_sprite", "#beer_sprite", "#figma_sprite", "#diagram_sprite", "#zip_sprite", "#fail_sprite", "#loop_sprite", "#tale_sprite", "#pillow_sprite"];
    
    containers.forEach(container => document.querySelector(container).classList = "");
    sprites.forEach(sprite => document.querySelector(sprite).classList = "");

    // Fjern eventListeners
    containers.forEach(container => document.querySelector(container).removeEventListener("mousedown", clickAdobe));
    containers.forEach(container => document.querySelector(container).removeEventListener("animationend", addPoints1));

    // Bestem hvilken slutskærm der skal vises
    if (points1 > 4 && points1 >= points2 && points1 >= points3 && points1 >= points4) {
        levelComplete1();
    } else if (points2 > 4 && points2 >= points1 && points2 >= points3 && points2 >= points4) {
        levelComplete2();
    } else if (points3 > 4 && points3 >= points1 && points3 >= points2 && points3 >= points4) {
        levelComplete3();
    } else if (points4 > 4 && points4 >= points1 && points4 >= points2 && points4 >= points3) {
        levelComplete4();
    } else {
        levelComplete5();
    }
}





function levelComplete1() {
  console.log("Funktionen levelComplete1");
  document.querySelector("#level_complete1").classList.remove("hide");
  document.querySelector("#play_again1").classList.add("pulse");
  document.querySelector("#play_again1").addEventListener("click", startSpil);

  document.querySelector("#content").play();
}

function levelComplete2() {
    console.log("Funktionen levelComplete2");
    document.querySelector("#level_complete2").classList.remove("hide");
    document.querySelector("#play_again2").classList.add("pulse");
    document.querySelector("#play_again2").addEventListener("click", startSpil);

    document.querySelector("#kodning").play();
  }

function levelComplete3() {
    console.log("Funktionen levelComplete3");
    document.querySelector("#level_complete3").classList.remove("hide");
    document.querySelector("#play_again3").classList.add("pulse");
    document.querySelector("#play_again3").addEventListener("click", startSpil);

    document.querySelector("#hype").play();
  }

function levelComplete4() {
    console.log("Funktionen levelComplete4");
    document.querySelector("#level_complete4").classList.remove("hide");
    document.querySelector("#play_again4").classList.add("pulse");
    document.querySelector("#play_again4").addEventListener("click", startSpil);

    document.querySelector("#joe").play();
  }

function levelComplete5() {
    console.log("Funktionen levelComplete5");
    document.querySelector("#level_complete5").classList.remove("hide");
    document.querySelector("#play_again5").classList.add("pulse");
    document.querySelector("#play_again5").addEventListener("click", startSpil);

    document.querySelector("#selvstændig").play();
  }

// --------------------------------- Points ---------------------------------

function addPoints1() {
    points1 += 1;
}

function addPoints2() {
    points2 += 1;
}

function addPoints3() {
    points3 += 1;
}

function addPoints4() {
    points4 += 1;
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
  document.querySelector("#mortenskyllinger_screen").classList.add("hide");
}

function windowResize() {
  let widthScreen = document.querySelector("#screen").clientWidth;

  
}
