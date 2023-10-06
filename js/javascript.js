function getComputerChoice(){
    let randomize = parseInt(Math.random() *3);
    if(randomize === 2){
        return "Rock";
    }else if(randomize === 1){
        return "Paper";
    }else{
        return "Scissors" ;
    }
}
function playRound(playerSelection,computerSelection){
    if(computerSelection === "Rock"){
        switch(playerSelection){
            case "Rock":
                return "It's a draw!";
            break;
            case "Scissors":
                return "You lose! Rock beats Scissors!";
            break;
            case "Paper":
                return "You win! Paper beats Rock!";
            break;
        }
    }else if(computerSelection === "Paper"){
        switch(playerSelection){
            case "Rock":
                return "You lose! Paper beats Rock!";
            break;
            case "Scissors":
                return "You win! Scissors beat Paper!"
            break;
            case "Paper":
                return "It's a draw"
        }
    }else{
        switch(playerSelection){
            case "Rock":
                return "You win! Rock beats Scissors";
            break;
            case "Scissors":
                return "It's a draw!"
            break;
            case "Paper":
                return "You lose! Scissors beat Paper!"
        }
    }
}

let playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

