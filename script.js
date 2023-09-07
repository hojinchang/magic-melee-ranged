function getComputerChoice() {
    const choices = ["magic", "melee", "ranged"];
    let idxChoice = Math.floor(Math.random() * choices.length);
    
    return choices[idxChoice];
}


function playRound(playerSelection, computerSelection) {
    const choices = ["magic", "melee", "ranged"];

    playerSelection = playerSelection.toLowerCase();

    let roundDecision;

    if (!choices.includes(playerSelection)) {
        return "Invalid input choice!";
    }
    
    if (playerSelection === computerSelection) {
        roundDecision = "tie";
    } else if (playerSelection === "magic" && computerSelection === "melee" ||
                playerSelection === "melee" && computerSelection == "magic" ||
                playerSelection === "ranged" && computerSelection ==="magic") {

        roundDecision = "player";
    } else {
        roundDecision = "computer";
    }

   return roundDecision;
}


function selectImage(selection) {
    let imagePath;
    switch (selection) {
        case "magic":
            imagePath = "./images/wizard-staff.svg";
            break;
        case "melee":
            imagePath = "./images/relic-blade.svg";
            break;
        case "ranged":
            imagePath = "./images/high-shot.svg";
            break;
    }
    return imagePath;
}

function changeIcon(playerSelection, computerSelection) {
    const playerImage = selectImage(playerSelection);
    const computerImage = selectImage(computerSelection);

    const playerIcon = document.querySelector(".player-icon");
    playerIcon.src = playerImage;
    playerIcon.classList.add("selected-icon");

    const computerIcon = document.querySelector(".computer-icon");
    computerIcon.src = computerImage;
    computerIcon.classList.add("selected-icon");
}


function updateScore(decision) {
    const playerScoreMessage = document.querySelector(".player-score");
    const computerScoreMessage = document.querySelector(".computer-score");

    if (decision === "player") {
        playerScore++;
        playerScoreMessage.textContent = `Player: ${playerScore}`;
    } else if (decision === "computer") {
        computerScore++;
        computerScoreMessage.textContent = `Computer: ${computerScore}`;
    }
}

function updateScoreBoard(playerSelection, computerSelection, decision) {
    const scoreStatus = document.querySelector(".score-status");
    const scoreMessage = document.querySelector(".score-message");

    let decisionStatus;
    let decisionMessage;
    if (decision === "player") {
        decisionStatus = "Congratz, you leveled up";
        decisionMessage = `<span class=${playerSelection}>${playerSelection}</span> beats <span class=${computerSelection}>${computerSelection}</span>`;
    } else if (decision === "computer") {
        decisionStatus = "HAHA, better luck next time n00b";
        decisionMessage = `<span class=${playerSelection}>${playerSelection}</span> loses to <span class=${computerSelection}>${computerSelection}</span>`;
    } else {
        decisionStatus = "It's a tie";
        decisionMessage = `<span class=${playerSelection}>${playerSelection}</span> ties with <span class=${computerSelection}>${computerSelection}</span>`;
    } 

    scoreStatus.textContent = decisionStatus;
    scoreMessage.innerHTML = decisionMessage;

    updateScore(decision);
}


function resetGame() {
    const scoreStatus = document.querySelector(".score-status");
    const scoreMessage = document.querySelector(".score-message");
    const playerScoreMessage = document.querySelector(".player-score");
    const computerScoreMessage = document.querySelector(".computer-score");
    const playerIcon = document.querySelector(".player-icon");
    const computerIcon = document.querySelector(".computer-icon");

    scoreStatus.textContent = "Choose Your Combat Style";
    scoreMessage.textContent = "First to win 5 rounds wins the game!";
    playerScoreMessage.textContent = `Player: 0`;
    computerScoreMessage.textContent = `Computer: 0`;
    
    const resetImagePath = "./images/question-mark-svgrepo-com.svg";
    playerIcon.src = resetImagePath;
    computerIcon.src = resetImagePath;
    playerIcon.classList.remove("selected-icon");
    computerIcon.classList.remove("selected-icon");
}

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function getPlayerSelection(e) {
    const selectedButton = e.currentTarget.classList[1];

    let playerSelection;
    switch (selectedButton) {
        case "magic-button":
            playerSelection = "magic";
            break;
        case "melee-button":
            playerSelection = "melee";
            break;
        case "ranged-button":
            playerSelection = "ranged";
            break;
    }

    const computerSelection = getComputerChoice();
    changeIcon(playerSelection, computerSelection);

    const decision = playRound(playerSelection, computerSelection);

    updateScoreBoard(playerSelection, computerSelection, decision);

    if (playerScore === maxScore || computerScore === maxScore) {
        const gameWinner = playerScore === maxScore ? 'Player' : 'Computer';
        setTimeout(() => {
            alert(`${gameWinner} wins the game!`);
        }, 10);

        playerScore = 0;
        computerScore = 0;
        resetGame();
    } 
    
}


const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', getPlayerSelection)
    });
