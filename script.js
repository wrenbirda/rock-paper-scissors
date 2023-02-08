// ask the computer to choose one of these items
const items = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * items.length);
  return items[random];
}

// we need to include a player selection too
function getPlayerChoice() {
  return prompt("Let's play rock, paper, scissors! Please type your selection below:");
}

// https://stackoverflow.com/a/1026087
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function announceWin(winner, loser) {
  console.log("You win!", capitalize(winner), "beats", loser + ". Go again.");
}

function announceLose(winner, loser) {
  console.log("You lose!", capitalize(winner), "beats", loser + ". Go again.");
}

/*
function somethingBroke() {
  console.log("How'd you get here?");
}
*/

// Now comes the scary part. We're going to FIGHT!
function play() {
  let pc = getPlayerChoice().toLowerCase();
  let cc = getComputerChoice().toLowerCase();

  console.log(pc)
  console.log(cc)

  if (pc == cc) {
    console.log('You tie! Go again.');
  }

  if (pc == "rock") {
    if (cc == "paper") {
      announceLose(cc, pc);
    } else if (cc == "scissors") {
      announceWin(pc, cc);
// Don't know how to continue in JS yet
//    } else {
//      somethingBroke();
    }
  }

  else if (pc == "paper") {
    if (cc == "scissors") {
      announceLose(cc, pc);
    } else if (cc == "rock") {
      announceWin(pc, cc);
    }
  }

  else if (pc == "scissors") {
    if (cc == "rock") {
      announceLose(cc, pc);
    } else if (cc == "paper") {
      announceWin(pc, cc);
    }

  } else {
    console.log("Please choose only rock, paper, or scissors!");
  }
}

play()
