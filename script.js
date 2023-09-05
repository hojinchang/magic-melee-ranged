function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let idxChoice = Math.floor(Math.random() * choices.length);
    
    return choices[idxChoice];
}
