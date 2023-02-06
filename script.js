// define what 0, 1, and 2 are. 0 will equal rock, 1 will be paper, and 2 scissors
const items = ['Rock', 'Paper', 'Scissors'];

// ask the computer to choose one of these items
const getComputerChoice = Math.floor(Math.random() * items.length);

// we need to include a player selection too
let getPlayerChoice = prompt('Let\'s play rock, paper, scissors! Please type your selection below:');

// define 'out'
let out = ['rock', 'paper', 'scissors'];

// now's the scary part. We're going to FIGHT!
function play() {
    if (getPlayerChoice.toLowerCase() == 'rock') {
      if (items[getComputerChoice] == 'Paper') {
        out= ('You lose! Paper beats rock. Go again.');
      } else if (items[getComputerChoice] == 'Scissors') {
        out= ('You win! Rock beats scissors. Go again.');
      } else if (items[getComputerChoice] == 'Rock') {
        out= ('You tie! Go again.');
      }
    } else if (getPlayerChoice.toLowerCase() == 'paper') {
      if (items[getComputerChoice] == 'Paper') {
        out= ('You tie! Go again.');
      } else if (items[getComputerChoice] == 'Scissors') {
        out= ('You lose! Scissors beats paper. Go again.');
      } else if (items[getComputerChoice] == 'Rock') {
        out= ('You win! Paper beats rock. Go again.');
      }
    } else if (getPlayerChoice.toLowerCase() == 'scissors') {
      if (items[getComputerChoice] == 'Paper') {
        out= ('You win! Scissors beats paper. Go again.');
      } else if (items[getComputerChoice] == 'Scissors') {
        out= ('You tie! Go again.');
      } else if (items[getComputerChoice] == 'Rock') {
        out= ('You lose! Rock beats scissors. Go again.');
      }
    } else {
      console.log('Please choose only rock, paper, or scissors!');
    }
  }

play()
console.log(out)

