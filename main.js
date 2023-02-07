function game(getPlayerChoice, getComputerChoice) {

    // this is the last part, not the first - but wrap the whole function in a loop
    for (let i = 0; i < 5; i++) {
    
      // define what 0, 1, and 2 are. 0 will equal rock, 1 will be paper, and 2 scissors
      const items = ['Rock', 'Paper', 'Scissors'];
    
    // ask the computer to choose one of these items
      const getComputerChoice = Math.floor(Math.random() * items.length);
    
    // test - console log
      console.log(items[getComputerChoice]);
    
    // we need to include a player selection too
      let getPlayerChoice = prompt('Let\'s play rock, paper, scissors! Best out of 5 wins. Please type your selection below:');
    
    // define 'out'
      let out= ['rock', 'paper', 'scissors'];
    
    // define 'player score'
      let playerScore= 0;
    
    // define 'computer score'
      let computerScore= 0;
    
    // define 'final'
      let final= [playerScore, computerScore];
    
    // now's the scary part. We're going to FIGHT!
      function play() {
    // if player chose rock
        if (getPlayerChoice.toLowerCase() == 'rock') {
          if (items[getComputerChoice] == 'Paper') {
            out= ('You lose this round! Paper beats rock.');
            computerScore = ++computerScore;
          } else if (items[getComputerChoice] == 'Scissors') {
            out= ('You win this round! Rock beats scissors.');
            playerScore = ++playerScore;
          } else if (items[getComputerChoice] == 'Rock') {
            out= ('You tie this round!');
          }
    // if player chose paper
        } else if (getPlayerChoice.toLowerCase() == 'paper') {
          if (items[getComputerChoice] == 'Paper') {
            out= ('You tie this round!');
          } else if (items[getComputerChoice] == 'Scissors') {
            out= ('You lose this round! Scissors beats paper.');
            computerScore = ++computerScore;
          } else if (items[getComputerChoice] == 'Rock') {
            out= ('You win this round! Paper beats rock.');
            playerScore = ++playerScore;
          }
    // if player chose scissors
        } else if (getPlayerChoice.toLowerCase() == 'scissors') {
          if (items[getComputerChoice] == 'Paper') {
            out= ('You win this round! Scissors beats paper.');
            playerScore = ++playerScore;
          } else if (items[getComputerChoice] == 'Scissors') {
            out= ('You tie this round!');
          } else if (items[getComputerChoice] == 'Rock') {
            out= ('You lose this round! Rock beats scissors.');
            computerScore = ++computerScore;
          }
    // if player didn't choose RPS
        } else {
          console.log('Please choose only rock, paper, or scissors!');
        }
      }
    
    // runs the function and gives us the result
      play()
      console.log(out)
    
    }
    
    // function for the end of the game
    function end () {
      console.log(final);
    }
    
    
    // define 'final'
    let final= [playerScore, computerScore];
    
    game();
    console.log(out);
    console.log(final);
    
    }
    
    // I'm done dealing with this script right now, it's irritating me, but it runs 5x then stops. I don't know how to make it declare a final winner yet.