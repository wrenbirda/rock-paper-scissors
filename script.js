// define game options
const items = ['rock', 'paper', 'scissors'];

// define counter variables
let playerWinsCounter = 0;
let playerLosesCounter = 0;

// function to generate computer choice
function getComputerChoice() {
    return items[Math.floor(Math.random() * items.length)];
}

// get player choice
function getPlayerChoice() {
    return prompt('It\'s time to play rock, paper, scissors! Please type your selection below:');
}

// function for if player wins
function ifPlayerWins(winner, loser) {
    console.log('You win!', winner + ' beats', loser + ". Go again.");
    playerWinsCounter++;
}

// function for if player loses
function ifPlayerLoses(winner, loser) {
    console.log('You lose!', winner + ' beats', loser + ". Go again.");
    playerLosesCounter++;
}

// just in case, but this should never be relevant
function somethingBroke() {
    console.log('I don\'t know how you got here, but I suggest you go back.');
}

// this function is the game (not including the loop)
function playGame () {

    // define choices
    let pc = getPlayerChoice().toLowerCase();
    let cc = getComputerChoice().toLowerCase();

    // tie
    if (pc == cc) {
        return console.log('You tie! You both chose', pc + '. Go again.');
    } 
    
    // rock
    else if (pc == 'rock') {
        if (cc == 'paper') {
            ifPlayerLoses(cc, pc);
        } else if (cc == 'scissors') {
            ifPlayerWins(pc, cc);
        } else {
            return somethingBroke();
        }
    }

    // paper
    else if (pc == 'paper') {
        if (cc == 'scissors') {
            ifPlayerLoses(cc, pc);
        } else if (cc == 'rock') {
            ifPlayerWins(pc, cc);
        } else {
            return somethingBroke();
        }
    }    
    
    // scissors
    else if (pc == 'scissors') {
        if (cc == 'rock') {
            ifPlayerLoses(cc, pc);
        } else if (cc == 'paper') {
            ifPlayerWins(pc, cc);
        } else {
            return somethingBroke();
        }
    }

    // didn't type rps
    else if (pc != 'rock' &&
             pc != 'paper' &&
             pc != 'scissors') {
                return console.log('//.// I don\'t like your selection :(');
             }

    // just in case
    else {
        return somethingBroke();
    }
}


// here's the game in action
for (i = 0; ; i++) {
    if (playerWinsCounter == 3) {
        console.log('You won the game! Congratulations!');
        break;
    }
    else if (playerLosesCounter == 3) {
        console.log('You lost the game! Boooo you loser!');
        break;
    }
    playGame();
}




















// simplify at least the 'invalid' portion to this later, when code is working:
// } else if ((playerChoice.toLowerCase() not in items))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


// first class functions