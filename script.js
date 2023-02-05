// We are going to add string values to these numbers. 0 will equal rock, 1 will be paper, and 2 scissors.
const items = ['Rock', 'Paper', 'Scissors'];

// Then we need to ask the computer to choose one of these items. RPS are tied to 012.
const getComputerChoice = Math.floor(Math.random() * items.length);

// console.log so I can check it's working.
console.log(items[getComputerChoice]);

// we need to include a player selection too
const getPlayerChoice = prompt('Let\'s play rock, paper, scissors! Please type your selection below:');

// console.log so I can check it's working.
console.log(getPlayerChoice);

// Now's the scary part. We're going to FIGHT!






// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
