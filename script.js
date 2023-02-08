// ask the computer to choose one of these items
const items = ["rock", "paper", "scissors"];

let playerWins = 0;
let playerLoses = 0;

function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
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
  playerWins++;
}

function announceLose(winner, loser) {
  console.log("You lose!", capitalize(winner), "beats", loser + ". Go again.");
  playerLoses++;
}

// should never get here
function somethingBroke() {
  console.log("How'd you get here?");
}

// Now comes the scary part. We're going to FIGHT!
function play() {
  let pc = getPlayerChoice().toLowerCase();
  let cc = getComputerChoice();

  // for development and testing
  console.log(pc)
  console.log(cc)

  if (pc == cc) {
    console.log('You tie! Go again.');
    return;
  }

  if (pc == "rock") {
    if (cc == "paper") {
      announceLose(cc, pc);
    } else if (cc == "scissors") {
      announceWin(pc, cc);
    } else {
      somethingBroke();
      return;
    }
  }

  else if (pc == "paper") {
    if (cc == "scissors") {
      announceLose(cc, pc);
    } else if (cc == "rock") {
      announceWin(pc, cc);
    } else {
      somethingBroke();
      return;
    }
  }

  else if (pc == "scissors") {
    if (cc == "rock") {
      announceLose(cc, pc);
    } else if (cc == "paper") {
      announceWin(pc, cc);
    } else {
      somethingBroke();
      return;
    }

  } else {
    console.log("Please choose only rock, paper, or scissors!");
  }
}

// entrypoint

for (i = 0; ; i++) {
  if (playerWins == 3) {
    console.log("You won three games!");
    break;
  }
  else if (playerLoses == 3) {
    console.log("You lost three games!");
    break;
  }
  play();
}
