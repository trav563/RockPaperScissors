const options = ["rock", "paper", "scissors"];
const outcome = document.querySelector('.outcome')
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
let scorePlayer = 0
let scoreComputer = 0
const playerScoreSpan = document.querySelector('.playerScore');
const computerScoreSpan = document.querySelector('.computerScore');



function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function decideWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie"
    } else if(
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock"){
            return "player";
        } else {
            return "computer";
        }
}

function playRound(playerSelection, computerSelection){
    const result = decideWinner(playerSelection, computerSelection);
        
        outcome.innerText = '';

        if(result == "tie"){
            const p = document.createElement('p');
            p.innerText = "It is a tie."
            outcome.appendChild(p);
        } else if(result == "player"){
            const p = document.createElement('p');
            p.innerText = `You win! ${playerSelection} beats ${computerSelection}!`
            outcome.appendChild(p);
            scorePlayer++
        } else {
            const p = document.createElement('p');
            p.innerText = `You lose. ${computerSelection} beats ${playerSelection}`
            outcome.appendChild(p);
            scoreComputer++
        } 

        if(scorePlayer === 6 || scoreComputer === 6){
            scorePlayer = 0;
            scoreComputer = 0;
        }
} 

function checkForWinner(scorePlayer, scoreComputer){

    if(scorePlayer === 5){
        const h2 = document.createElement('h2')
        h2.classList.add(`playerWon`);
        h2.innerText = `You won ${scorePlayer} to ${scoreComputer}! Nice!`
        outcome.appendChild(h2);
        scoreComputer = 0;
        scorePlayer = 0;

        playerScoreSpan.innerText = `You: ${scorePlayer}`
        computerScoreSpan.innerText = `Computer: ${scoreComputer}`
    }

    if(scoreComputer === 5){
        const h2 = document.createElement('h2')
        h2.classList.add(`computerWon`);
        h2.innerText = `You lost ${scorePlayer} to ${scoreComputer}! Better luck next time!`
        outcome.appendChild(h2);
        
        scoreComputer = 0;
        scorePlayer = 0;

        playerScoreSpan.innerText = `You: ${scorePlayer}`
        computerScoreSpan.innerText = `Computer: ${scoreComputer}`
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    playerScoreSpan.innerText = `You: ${scorePlayer}`
    computerScoreSpan.innerText = `Computer: ${scoreComputer}`
    checkForWinner(scorePlayer, scoreComputer);
}) 

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    playerScoreSpan.innerText = `You: ${scorePlayer}`
    computerScoreSpan.innerText = `Computer: ${scoreComputer}`
    checkForWinner(scorePlayer, scoreComputer);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissor';
    playRound(playerSelection, computerSelection);
    playerScoreSpan.innerText = `You: ${scorePlayer}`
    computerScoreSpan.innerText = `Computer: ${scoreComputer}`
    checkForWinner(scorePlayer, scoreComputer);
})









/* 
function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
    const choice = prompt("Rock, Paper or Scissors?")
        if(choice == null){
            continue;
        }
    const lowerCaseChoice = choice.toLowerCase();
        if(options.includes(lowerCaseChoice)){
            validInput = true;
            return lowerCaseChoice;
        }
}
} */

/* function game(){
let scorePlayer = 0;
let scoreComputer = 0;
console.log("Let's Begin");

for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if(decideWinner(playerSelection, computerSelection) == "player"){
        scorePlayer++
    } else if(decideWinner(playerSelection, computerSelection) == "computer"){
        scoreComputer++
    }
}   if(scorePlayer > scoreComputer){
    console.log("Player Wins!")
}   else if(scoreComputer > scorePlayer){
    console.log("Computer Wins")
}   else {
    console.log("We have a tie")
}
} 

game()  */