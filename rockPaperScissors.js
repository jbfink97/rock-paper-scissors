window.addEventListener('load', () => {
const plays = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let choice = plays[Math.floor(Math.random() * plays.length)];
    return choice;    
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = "Computer wins this round! Paper beats rock.";
        else {
            result = "You win this round! Rock beats scissors.";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = "You win this round! Paper beats rock.";
        } else {
            result = "Computer wins this round! Scissors beats paper."
        }
    } else {
        if (computerSelection == "rock") {
            result = "You win this round! Scissors beats rock.";
        } else {
            result = "Computer wins this round! Paper beats scissors";
        }
    }
    }
    return result;
}

const btns = document.querySelectorAll('button');




})