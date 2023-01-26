//defining variables for DOM elements

const html = document.querySelector("html");
const themeButton = document.querySelector("#theme-btn");
const btnStart = document.querySelector("#btn-start");
const rockCard = document.querySelector("#rock");
const paperCard = document.querySelector("#paper");
const scissorCard = document.querySelector("#scissor");
const optionContainer = document.querySelector(".option-container");
const scoreContainer = document.querySelector(".score-container");
const homePage = document.querySelector("#home");
const btnFight = document.querySelector("#btn-fight");
const btnContinue = document.querySelector("#btn-continue");
const playerCard = document.querySelector("#player-card");
const playerIcon = document.querySelector("#player-choice");
const playerProgress = document.querySelector("#player-progress");
const playerScore = document.querySelector("#player-score");
const computerCard = document.querySelector("#computer-card");
const computerIcon = document.querySelector("#computer-choice");
const computerProgress = document.querySelector("#computer-progress");
const computerScore = document.querySelector("#computer-score");
const roundTitle = document.querySelector("#round-title");
const roundResult = document.querySelector("#round-result");
const hint = document.querySelector(".hint");
const finalResult = document.querySelector("#final-result");
const playerWin = document.querySelector("#player-win");
const computerWin = document.querySelector("#computer-win");
const finalTitle = document.querySelector("#final-title");
const finalSubtitle = document.querySelector("#final-subtitle");
const btnPlayAgain = document.querySelector("#btn-play-again");

// Declaring variable for the game

let round = 1;
let playerChoice = "";

//Homepage functions

btnStart.addEventListener('click', () => {
    rockCard.setAttribute('style','margin-top:200px');
    paperCard.setAttribute('style','margin-top:200px');
    scissorCard.setAttribute('style','margin-top:200px');
    homePage.classList.add('visually-hidden');
    hint.classList.remove('visually-hidden');
    scoreContainer.classList.remove('visually-hidden');
    rockCard.classList.replace('option-disabled','option');
    paperCard.classList.replace('option-disabled','option');
    scissorCard.classList.replace('option-disabled','option');
});

homePage.addEventListener('transitionend', (e) => {
    if(e.propertyName === "opacity") {
        homePage.classList.add('hidden');
    }
},{
    capture: true
});

themeButton.addEventListener('click', () => {
    if(html.getAttribute("data-theme") === "dark"){
        html.setAttribute('data-theme','light');
        themeButton.setAttribute("data-tooltip", "Turn on dark mode");
    } else {
        html.setAttribute('data-theme','dark');
        themeButton.setAttribute("data-tooltip", "Turn off dark mode");
    }
});

// Game functions

function resetSelectedChoices() {
    if(playerIcon.classList.contains("fa-hand-back-fist")) {
        playerIcon.classList.replace("fa-hand-back-fist", "fa-circle-question");
    } else if(playerIcon.classList.contains("fa-hand")) {
        playerIcon.classList.replace("fa-hand", "fa-circle-question");
    } else {
        playerIcon.classList.replace("fa-hand-scissors", "fa-circle-question");
    }
    if(computerIcon.classList.contains("fa-hand-back-fist")) {
        computerIcon.classList.replace("fa-hand-back-fist", "fa-circle-question");
    } else if(computerIcon.classList.contains("fa-hand")) {
        computerIcon.classList.replace("fa-hand", "fa-circle-question");
    } else {
        computerIcon.classList.replace("fa-hand-scissors", "fa-circle-question");
    }
}

function changePlayerSelection (newClass) {
    playerCard.classList.remove("selected");
    computerCard.classList.remove("selected");
    if (playerIcon.classList.contains("fa-circle-question")) {
        playerIcon.classList.replace("fa-circle-question", newClass);
    } else if(playerIcon.classList.contains("fa-hand-back-fist")) {
        playerIcon.classList.replace("fa-hand-back-fist", newClass);
    } else if(playerIcon.classList.contains("fa-hand")) {
        playerIcon.classList.replace("fa-hand", newClass);
    } else {
        playerIcon.classList.replace("fa-hand-scissors", newClass);
    }
}

function changeComputerSelection (newClass) {
    switch (newClass) {
        case "rock":
            newClass = "fa-hand-back-fist";
            break;
        case "paper":
            newClass = "fa-hand";
            break;
        default:
            newClass = "fa-hand-scissors";
    }
    if (computerIcon.classList.contains("fa-circle-question") && newClass) {
        computerIcon.classList.replace("fa-circle-question", newClass);
    } else if(computerIcon.classList.contains("fa-hand-back-fist")) {
        computerIcon.classList.replace("fa-hand-back-fist", newClass);
    } else if(computerIcon.classList.contains("fa-hand")) {
        computerIcon.classList.replace("fa-hand", newClass);
    } else {
        computerIcon.classList.replace("fa-hand-scissors", newClass);
    }
}

rockCard.addEventListener("click", () => {
    if(!(playerCard.classList.contains("selected")) && !(computerCard.classList.contains("selected"))) {
        playerChoice = "rock";
        paperCard.classList.remove("selected");
        scissorCard.classList.remove("selected");
        rockCard.classList.add("selected");
        changePlayerSelection("fa-hand-back-fist");
        btnFight.disabled = false;
    }
});

paperCard.addEventListener("click", () => {
    if(!(playerCard.classList.contains("selected")) && !(computerCard.classList.contains("selected"))) {
        playerChoice = "paper";
        rockCard.classList.remove("selected");
        scissorCard.classList.remove("selected");
        paperCard.classList.add("selected");
        changePlayerSelection("fa-hand");
        btnFight.disabled = false;
    }
});

scissorCard.addEventListener("click", () => {
    if(!(playerCard.classList.contains("selected")) && !(computerCard.classList.contains("selected"))) {
        playerChoice = "scissor";
        rockCard.classList.remove("selected");
        paperCard.classList.remove("selected");
        scissorCard.classList.add("selected");
        changePlayerSelection("fa-hand-scissors");
        btnFight.disabled = false;
    }
});

btnFight.addEventListener("click", () => {
    rockCard.classList.replace('option','option-disabled');
    paperCard.classList.replace('option','option-disabled');
    scissorCard.classList.replace('option','option-disabled');
    playRound(getComputerChoice(), playerChoice);
    playerProgress.setAttribute("value",score.player);
    playerScore.textContent = `${score.player}/5`;
    computerProgress.setAttribute("value",score.computer);
    computerScore.textContent = `${score.computer}/5`;
    btnFight.classList.add("hidden");
    btnContinue.classList.remove("hidden");
});

btnContinue.addEventListener("click", () => {
    resetSelectedChoices();
    roundResult.textContent = "";
    round++;
    roundTitle.textContent = `Round ${round}`;
    rockCard.classList.replace('option-disabled','option');
    paperCard.classList.replace('option-disabled','option');
    scissorCard.classList.replace('option-disabled','option');
    playerCard.classList.remove("selected");
    computerCard.classList.remove("selected");
    round++;
    btnFight.classList.remove("hidden");
    btnContinue.classList.add("hidden");
    rockCard.classList.remove("selected");
    paperCard.classList.remove("selected");
    scissorCard.classList.remove("selected");
})

const score = {
    'computer' : 0,
    'player' : 0
}

let getComputerChoice = () => {
    let choice = (Math.floor(Math.random() * 3));
     return (choice === 0 ) ? 'rock'
    : choice === 1 ? 'paper'
    : 'scissor'

};


function playRound(computerChoice, playerChoice) {
    changeComputerSelection(computerChoice);
    if(computerChoice === playerChoice) {
        roundResult.textContent = `It's a tie! both chose ${computerChoice}`;
    } else if (computerChoice === 'rock' && playerChoice === 'paper' || computerChoice === 'paper' && playerChoice === 'scissor' || computerChoice === 'scissor' && playerChoice === 'rock') {
        playerCard.classList.add("selected");
        computerCard.classList.remove("selected");
        score.player++;
        roundResult.textContent = `${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}. You Win!`;
        if(score.player === 5) {
            playerWin.classList.remove("hidden");
            computerWin.classList.add("hidden");
            finalResult.setAttribute("open","true");
            finalTitle.textContent = "You won!";
            finalSubtitle.textContent = "Congratulations, you beat the computer!";
            finalResult.setAttribute("style","animation:display-result 0.5s;");
        }
    } else {
        computerCard.classList.add("selected");
        playerCard.classList.remove("selected");
        score.computer++;
        roundResult.textContent = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}. You lose :(`;
        if(score.computer === 5) {
            playerWin.classList.add("hidden");
            computerWin.classList.remove("hidden");
            finalResult.setAttribute("open","true");
            finalTitle.textContent = "You loose :(";
            finalSubtitle.textContent = "It seems that the computer outsmarted you...";
            finalResult.setAttribute("style","animation:display-result 0.5s;");
        }
    }
}

// Creating a replay function

btnPlayAgain.addEventListener("click", () => {
    btnFight.classList.remove("hidden");
    btnContinue.classList.add("hidden");
    playerCard.classList.remove("selected");
    computerCard.classList.remove("selected");
    rockCard.classList.remove("selected");
    paperCard.classList.remove("selected");
    scissorCard.classList.remove("selected");
    round = 1;
    resetSelectedChoices();
    score.computer = 0;
    score.player = 0;
    finalResult.setAttribute("open","false");
    roundTitle.textContent = "Round 1";
    roundResult.textContent = "";
    computerProgress.setAttribute("value",0);
    computerScore.textContent = `${score.computer}/5`;
    playerProgress.setAttribute("value",0);
    playerScore.textContent = `${score.player/5}`;
    

});