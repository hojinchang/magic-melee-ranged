function getComputerChoice() {
    const choices = ["magic", "melee", "ranged"];
    let idxChoice = Math.floor(Math.random() * choices.length);
    
    return choices[idxChoice];
}


function playRound(playerSelection, computerSelection) {
    const choices = ["magic", "melee", "ranged"];

    playerSelection = playerSelection.toLowerCase();

    let declareWinner;
    let roundDecision;

    if (!choices.includes(playerSelection)) {
        return "Invalid input choice!";
    }
    
    if (playerSelection === computerSelection) {
        roundDecision = "tie";
    } else if (playerSelection === "magic" && computerSelection === "melee" ||
                playerSelection === "melee" && computerSelection == "magic" ||
                playerSelection == "ranged" && computerSelection == "magic") {

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


function game() {

    let playerSelection, computerSelection, gameResult;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Select your choice! Magic, Melee, or Ranged!");
        computerSelection = getComputerChoice();

        gameResult = playRound(playerSelection, computerSelection);
        
        console.log(gameResult);
    }
}

game();