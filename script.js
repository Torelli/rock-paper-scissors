// Declaring a variable and assigning an arrow function to validate user input

let getUserChoice = () => {
    let choice = prompt(`Choose between "rock", "paper" or "scissor"`).trim().toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        choice = prompt(`${choice} is not a valid answer. Try again!`).trim().toLowerCase();
    }
    return choice;
}

// Declaring a variable for the computer choice and assigning a random choice between 'rock, paper or scissor'

let getComputerChoice = () => {
    let choice = (Math.floor(Math.random() * 3));
     return (choice === 0 ) ? 'rock'
    : choice === 1 ? 'paper'
    : 'scissor'

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

alert(getWinner(computerChoice(), userChoice()));

