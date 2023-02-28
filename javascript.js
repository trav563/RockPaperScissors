const options = ["rock", "paper", "scissors"];

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
            return "It is a tie."
        } else if(result == "player"){
            return `You win! ${playerSelection} beats ${computerSelection}!`
        } else {
            return `You lose. ${computerSelection} beats ${playerSelection}`
        }
}

function game(){
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

game()