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
                playerSelection == "ranged" && computerSelection == "magic") {

        roundDecision = "player";
    } else {
        roundDecision = "computer";
    }

   return roundDecision;
}


// function game() {

//     let playerSelection, computerSelection, gameResult;
//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt("Select your choice! Magic, Melee, or Ranged!");
//         computerSelection = getComputerChoice();

//         gameResult = playRound(playerSelection, computerSelection);
        
//         console.log(gameResult);
//     }
// }

// game();


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
    const decision = playRound(playerSelection, computerSelection);

    console.log(decision);
    
}


const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', getPlayerSelection)
    });
