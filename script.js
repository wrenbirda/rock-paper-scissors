// I'm making a new script. Because I can.
// Starting over has never hurt anyone. I got confused, I saved the old script, and it's time to start again.
// Good luck Wren.

// First we need to define the options in our game.
const items = ['rock', 'paper', 'scissors'];

// Next we need to get a choice from our computer.
function getComputerChoice() {
    return Math.floor(Math.random() * items.length);
}

// This is where I got confused last time.
// We need to break up the game more.
// There is a few sections. / player choice / round+ / game / results

// some declarations

// console.log(playerChoice);
let computerChoice = items[getComputerChoice()];
console.log(computerChoice);


// round
function playOneRound() {
    const playerChoice = prompt('Let\'s play rock paper scissors! Best of 5. Type your choice below:');
    // there's different outcomes: tie+, win+, lose+, invalid+
    // there's also a lot of different ways to win or lose ...this is the 'fun' part.
    //here's tie
    if (playerChoice.toLowerCase() == computerChoice) {
        return `Tie. You and computer both chose ${computerChoice}.`;
    
    // here's win
    } else if ((playerChoice.toLowerCase()=='rock' && computerChoice=='scissors') ||
               (playerChoice.toLowerCase()=='paper' && computerChoice=='rock') ||
               (playerChoice.toLowerCase()=='scissors' && computerChoice=='paper')) {
        return `Win! You chose ${playerChoice}, which beats computer\'s ${computerChoice}.`;

    // here`s lose
    } else if ((playerChoice.toLowerCase()==`rock` && computerChoice==`paper`) ||
               (playerChoice.toLowerCase()==`paper` && computerChoice==`scissors`) ||
               (playerChoice.toLowerCase()==`scissors` && computerChoice==`rock`)) {
        return `Lose. Computer chose ${computerChoice}, which beats your ${playerChoice}.`;

    // here`s invalid
    } else if ((playerChoice.toLowerCase()!=`rock`) ||
               (playerChoice.toLowerCase()!=`paper`) ||
               (playerChoice.toLowerCase()!=`scissors`)) {
        return 'Um... this is rock, paper, scissors. Please choose one of those words instead.';
    
// simplify at least the 'invalid' portion to this:
// } else if ((playerChoice.toLowerCase() not in items))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    // and just in case
    } else {
        return 'How did you get here?! Go back, quick, before they find you here! Run!';
        // hehe
    }
}

// function playFullGame(playOneRound) {
   //  define your variables


// }