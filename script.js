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
    playerIcon.style.borderStyle = "solid";
    playerIcon.style.backgroundColor = "white";

    const computerIcon = document.querySelector(".computer-icon");
    computerIcon.src = computerImage;
    computerIcon.style.borderStyle = "solid";
    computerIcon.style.backgroundColor = "white";
}



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
    
    changeIcon(playerSelection, computerSelection)

    console.log(decision);
    
}


const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener('click', getPlayerSelection)
    });
