//Computer choice randomization between rock, paper,scissors
function getComputerChoice(){
    let random = ["Rock","Paper","Scissors"];
    let randomize = random[Math.floor(Math.random()*random.length)]
    return randomize
}

const computerSelection = getComputerChoice();
let playerSelection;
//Round played player chooses their hand and computer chooses it's randomly
    function playRound(computerSelection,playerSelection){
    //prompting player to choose
    playerSelection = prompt("Choose a hand you want to play Rock, Paper or Scissors");
    // calling function getcomputer choice so it picks randomly every turn
    computerSelection = getComputerChoice();
    if(computerSelection === "Rock"){
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                return console.log("It's a draw");
            break;
            case "SCISSORS":
                return console.log("You lose! Rock beats Scissors!"),computerScore++;
            break;
            case "PAPER":
                return console.log("You win! Paper beats Rock"), playerScore++;
            break;
        }
    }else if(computerSelection === "Paper"){
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                return console.log("You lose! Paper beats Rock"),computerScore++;
            break;
            case "SCISSORS":
                return console.log("You win! Scissors beat Paper"),playerScore++;
            break;
            case "PAPER":
                return console.log("It's a draw");
            break;
            }
    }else{
        switch(playerSelection.toUpperCase()){
            case "ROCK":
                return console.log("You win! Rock beats Scissors"),playerScore++;
            break;
            case "SCISSORS":
                return console.log("It's a draw!")
            break ;
            case "PAPER":
                return console.log("You lose! Scissors beat Paper!"),computerScore++;
            break ;
        }
    }    
}
/*function getComputerChoice(){
    let randomize = parseInt(Math.random() *3);
    if(randomize === 2){
        return "Rock";
    }else if(randomize === 1){
        return "Paper";
    }else{
        return "Scissors" ;
    }
}*/
// let playerSelection = p if (playerScore > computerScore) {
    let computerScore , playerScore;
    // a function to call playRound 5 times and decide who is winner
    function game(){
    computerScore = 0;
    playerScore = 0;
    // This repeats the function playRound 5 times
    for(let i = 1; i < 6; i++ ){
        playRound(i)
    }
    if (playerScore > computerScore) {
        console.log('You win!...   (Your score: ' + playerScore + '  Computer: ' + computerScore + 
        ')');
    } else if(computerScore > playerScore) {
        console.log('You lose...  (Your score: ' + playerScore + '  Computer: ' + computerScore + 
        ')');
    }else{
        console.log(`It's a draw... (Your score: ` + playerScore + `  Computer: ` + computerScore + 
        `)`);
    }
}

game()




