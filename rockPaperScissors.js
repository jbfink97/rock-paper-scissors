const plays = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = plays[Math.floor(Math.random() * plays.length)];
    return choice;    
}

function playRound(){
    let string;
    if (playerSelection == computerSelection){
        string = "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper"){
            string = "Computer wins this round!";
        else {
            string = "You win this round!"
        }
        }

    }
}

function game(){
    let playerSelection;
    let computerSelection;
}