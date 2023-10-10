    //Computer choice randomization between rock, paper,scissors
    function getComputerChoice(){
    let computerInput = ["Rock","Paper","Scissors"];
    let randomizeArray = computerInput[Math.floor(Math.random()*computerInput.length)];
    return randomizeArray;
}
    
    let playerSelection;

    function playRound(computerSelection, playerSelection){
    computerSelection = getComputerChoice();
    if(computerSelection === "Rock"){
        switch(playerSelection){
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
        switch(playerSelection){
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
        switch(playerSelection){
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
    const computerSelection = getComputerChoice();
    let computerScore , playerScore;
   
    function game(){
    computerScore = 0;
    playerScore = 0;
    /*for(let i = 1; i <= 5; i++ ){
        playRound(i)
    }*/
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
    

    const btnRock = document.querySelector(`.rock`);
    const btnScissors = document.querySelector(`.scissors`);
    const btnPaper = document.querySelector(`.paper`);
    btnRock.addEventListener(`click`, function Rock(){
        playRound(computerSelection,"ROCK")
     })
  
    btnScissors.addEventListener(`click`, () => {
        playRound(computerSelection,"SCISSORS")
     })
   
    btnPaper.addEventListener(`click`, () => {
        playRound(computerSelection,"PAPER")
    })

