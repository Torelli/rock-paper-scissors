const html = document.querySelector("html");
const themeButton = document.querySelector("#theme-btn");

themeButton.addEventListener('click', () => {
    if(html.getAttribute("data-theme") === "dark"){
        html.setAttribute('data-theme','light');
        themeButton.setAttribute("data-tooltip", "Turn on dark mode");
    } else {
        html.setAttribute('data-theme','dark');
        themeButton.setAttribute("data-tooltip", "Turn off dark mode");
    }
});

const score = {
    'computer' : 0,
    'player' : 0
}

let getPlayerChoice = () => {
    let choice = prompt(`Choose between "rock", "paper" or "scissor"`).trim().toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        choice = prompt(`${choice} is not a valid answer. Try again!`).trim().toLowerCase();
    }
    return choice;
}

let getComputerChoice = () => {
    let choice = (Math.floor(Math.random() * 3));
     return (choice === 0 ) ? 'rock'
    : choice === 1 ? 'paper'
    : 'scissor'

};


function playRound(computerChoice, PlayerChoice) {
    if(computerChoice === PlayerChoice) {
        return `It's a tie! both chose ${computerChoice}`;
    } else if (computerChoice === 'rock' && PlayerChoice === 'paper' || computerChoice === 'paper' && PlayerChoice === 'scissor' || computerChoice === 'scissor' && PlayerChoice === 'rock') {
        score.player++;
        return `Computer chose ${computerChoice}. You Win!`;
    } else {
        score.computer++;
        return `Computer chose ${computerChoice}. You lose :(`
    }
}

// Play 5 rounds and display the final score

// function game() {
//     for(let i = 0; i < 5; i++) {
//         alert(`Round ${i+1} \n ${playRound(getComputerChoice(), getPlayerChoice())}`);
//     }
//     if(score.computer === score.player) {
//         alert(`It's a tie. Both computer and player won ${score.computer} rounds out of five.`);
//     }
//     else if(score.computer > score.player) {
//         alert(`You loose. Computer won ${score.computer} rounds out of 5.`);
//     } else {
//         alert(`Congratulations! You won ${score.player} rounds out of 5.`);
//     }
// }

// game();