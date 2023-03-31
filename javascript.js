const options = ["rock", "paper", "scissors"];
const outcome = document.querySelector('.outcome')
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')



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
        if(result == "tie"){
            const p = document.createElement('p');
            p.innerText = "It is a tie."
            outcome.appendChild(p);
        } else if(result == "player"){
            const p = document.createElement('p');
            p.innerText = `You win! ${playerSelection} beats ${computerSelection}!`
            outcome.appendChild(p);
        } else {
            const p = document.createElement('p');
            p.innerText = `You lose. ${computerSelection} beats ${playerSelection}`
            outcome.appendChild(p);
        } 
} 

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
}) 

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissor';
    playRound(playerSelection, computerSelection);
})


const result = document.createElement('div');






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

game() */