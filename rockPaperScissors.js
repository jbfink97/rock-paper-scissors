window.addEventListener('load', () => {
    const plays = ["rock", "paper", "scissors"];

    function getComputerChoice() {
        let choice = plays[Math.floor(Math.random() * plays.length)];
        return choice;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerScore < 5 && computerScore < 5) {
            let result;
            if (playerSelection == computerSelection) {
                result = "It's a tie!";
            } else if (playerSelection == "rock") {
                if (computerSelection == "paper") {
                    result = "Computer wins this round! Paper beats rock.";
                } else {
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
            roundWinner.textContent = result;
            if (result.includes('You win')) {
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            } else if (result.includes('Computer wins')) {
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            }
        }

        if (playerScore == 5) {
            gameWinner.textContent = "You win the game!";
            playAgainButton();
        } else if (computerScore == 5) {
            gameWinner.textContent = "Computer wins the game!";
            playAgainButton();
        }
    }

    function playAgainButton() {
        let playAgainButton = document.querySelector('.playAgain');
        playAgainButton.style.visibility = 'visible';
    }

    const btns = document.querySelectorAll('button');
    const roundWinner = document.querySelector('.playround');
    const playerScoreDisplay = document.querySelector('.playerScore');
    const computerScoreDisplay = document.querySelector('.computerScore');
    const gameWinner = document.querySelector('.winner');
    const playAgain = document.querySelector('.playAgain');

    let playerScore = 0;
    let computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            playerSelection = btn.id;
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        })
    })

    playAgain.addEventListener('click', () =>{
        window.location.reload();
    })

})