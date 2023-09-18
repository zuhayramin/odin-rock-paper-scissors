const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const resultContainer = document.querySelector(".resultContainer")
const result = document.querySelector(".result")
let playerSelection

rock.addEventListener("click", function () {
    playerSelection = "rock"
    game(playerSelection)
})

paper.addEventListener("click", function () {
    playerSelection = "paper"
    game(playerSelection)
})

scissors.addEventListener("click", function () {
    playerSelection = "scissors"
    game(playerSelection)
})

console.log(playerSelection)

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
    }
}

game()

function game(playerSelection) {
    const computerSelection = getComputerChoice()
    result.textContent = playRound(playerSelection, computerSelection)
    resultContainer.appendChild(result)
}
