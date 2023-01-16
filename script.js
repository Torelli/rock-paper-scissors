// Declaring a variable for the user input

let userChoice = prompt(`Choose between "rock", "paper" or "scissor"`);

// Declaring a variable for the computer choice with a random choice between 'rock, paper or scissor'

let computerChoice = () => {
    let choice = (Math.floor(Math.random() * 3));
    console.log(choice);
     return (choice === 0 ) ? 'rock'
    : choice === 1 ? 'paper'
    : 'scissor'

};

console.log(computerChoice());

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

