function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let idxChoice = Math.floor(Math.random() * choices.length);
    
    return choices[idxChoice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let declareWinner;
    let roundDecision;

    if (playerSelection === computerSelection) {
        roundDecision = "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                playerSelection === "paper" && computerSelection == "rock" ||
                playerSelection == "scissors" && computerSelection == "paper") {

        roundDecision = "player";
    } else {
        roundDecision = "computer";
    }

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    switch(roundDecision) {
        case "tie":
            declareWinner = `It's a tie! ${playerSelection} ties with ${computerSelection}!`;
            break;
        
        case "player":
            declareWinner = `You won! ${playerSelection} beats ${computerSelection}`;
            break;

        case "computer":
            declareWinner = `You lost! ${playerSelection} loses to ${computerSelection}`;
            break;
    }

    return declareWinner;
}