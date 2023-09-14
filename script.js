// get the computer to make a choice
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else if (computerChoice === 3) {
        return "scissors"
    }
}

// // compare the choices and decide who won

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Won! Rock beats Scissors"
        } else if (computerSelection === "paper") {
            return "You Lost! Paper beats Rock"
        } else {
            return "It's a tie!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Won! Paper beats Rock"
        } else if (computerSelection === "scissors") {
            return "You Lost! Scissors beats Paper"
        } else {
            return "It's a tie!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Won! Scissors beats Paper"
        } else if (computerSelection === "rock") {
            return "You Lost! Rock beats scissors"
        } else {
            return "It's a tie!"
        }
    } else {
        return "Please enter a valid input!"
    }
}

game()

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(
            "Pick rock, paper or scissors: "
        ).toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}
