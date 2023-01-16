// Declaring a variable for the user input

let userChoice = prompt(`Choose between "rock", "paper" or "scissor"`);

// Declaring a variable for the computer choice with a random choice between 'rock, paper or scissor'

let computerChoice = () => {
    let choice = (Math.floor(Math.random() * 10));
    if (choice >= 7 ) {
        return 'rock' // range of 7-9
    } else if(choice >= 4) {
        return 'paper'; //range of 4-6
    } else if (choice != 0) {
        return 'scissor'; // range of 1-3
    } else {
         return computerChoice(); // if choice == 0 the function is called again (the range should be 1-9)
    }
};

// Create a function to test which one wins the game

function getWinner(computerChoice, userChoice) {
    if(computerChoice === userChoice) {
        return `It's a tie! both chose ${computerChoice}`;
    } else if (computerChoice === 'rock' && userChoice === 'paper' || computerChoice === 'paper' && userChoice === 'scissor' || computerChoice === 'scissor' && userChoice === 'rock') {
        return `Computer chose ${computerChoice}. You Win!`;
    } else {
        return `Computer chose ${computerChoice}. You lose :(`
    }
}

// Display the result

alert(getWinner(computerChoice(), userChoice));

