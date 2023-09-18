const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const resultContainer = document.querySelector(".resultContainer")
const result = document.querySelector(".result")
const player = document.querySelector(".playerScore")
const computer = document.querySelector(".computerScore")
const scores = document.querySelector(".scores")
let playerScore = 0
let computerScore = 0

let playerSelection

rock.addEventListener("click", playerRock)

function playerRock() {
    playerSelection = "rock"
    game(playerSelection)
}

paper.addEventListener("click", playerPaper)
function playerPaper() {
    playerSelection = "paper"
    game(playerSelection)
}

scissors.addEventListener("click", playerScissors)
function playerScissors() {
    playerSelection = "scissors"
    game(playerSelection)
}

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
            playerScore++
            return "You Won! Rock beats Scissors"
        } else if (computerSelection === "paper") {
            computerScore++
            return "You Lost! Paper beats Rock"
        } else {
            return "It's a tie!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++
            return "You Won! Paper beats Rock"
        } else if (computerSelection === "scissors") {
            computerScore++
            return "You Lost! Scissors beats Paper"
        } else {
            return "It's a tie!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++
            return "You Won! Scissors beats Paper"
        } else if (computerSelection === "rock") {
            computerScore++
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
    player.textContent = `Your Score: ${playerScore}`
    scores.appendChild(player)

    computer.textContent = `Your Score: ${computerScore}`
    scores.appendChild(computer)
    if (computerScore === 5 || playerScore === 5) {
        if (playerScore === 5) {
            result.textContent = "YOU ARE THE SUPREME CHAMPION!"
            resultContainer.appendChild(result)
        } else {
            result.textContent = "THE COMPUTERS ARE TAKING OVER!!!"
            resultContainer.appendChild(result)
        }
        rock.removeEventListener("click", playerRock)
        paper.removeEventListener("click", playerPaper)
        scissors.removeEventListener("click", playerScissors)
    }
}
