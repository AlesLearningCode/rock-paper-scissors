    const btnRock = document.querySelector(`.rock`);
    const btnScissors = document.querySelector(`.scissors`);
    const btnPaper = document.querySelector(`.paper`);
    const roundMessage = document.querySelector(`.roundMsg`)
    const endScore = document.querySelector(`.endScore`)
    const buttons = document.querySelectorAll(`button`)

    const computerSelection = getComputerChoice();
    let playerSelection; 
    let computerScore = 0;
    let playerScore = 0;
       
    //Computer choice randomization between rock, paper,scissors
    function getComputerChoice(){
    let computerInput = ["Rock","Paper","Scissors"];
    let randomizeArray = computerInput[Math.floor(Math.random()*computerInput.length)];
    return randomizeArray;
}

    function playRound(computerSelection, playerSelection){
    computerSelection = getComputerChoice();
    
    if(computerSelection === "Rock"){
        switch(playerSelection){
            case "ROCK":
            roundMessage.textContent = "It's a draw";
            break;
            case "SCISSORS":
            roundMessage.textContent = "You lose! Rock beats Scissors!", 
            computerScore++;
            break;
            case "PAPER":
            roundMessage.textContent ="You win! Paper beats Rock", 
            playerScore++;
            break;
        }
    }else if(computerSelection === "Paper"){
        switch(playerSelection){
            case "ROCK":
            roundMessage.textContent ="You lose! Paper beats Rock",
            computerScore++;
            break;
            case "SCISSORS":
            roundMessage.textContent ="You win! Scissors beat Paper",
            playerScore++;
            break;
            case "PAPER":
            roundMessage.textContent ="It's a draw";
            break;
            }
    }else{
        switch(playerSelection){
            case "ROCK":
            roundMessage.textContent ="You win! Rock beats Scissors", 
            playerScore++;
            break;
            case "SCISSORS":
            roundMessage.textContent ="It's a draw!"
            break;
            case "PAPER":
            roundMessage.textContent = "You lose! Scissors beat Paper!",  
            computerScore++;
            break;
        }
    }
}
       

    function playGame(){
        btnRock.addEventListener(`click`, () => {
            playRound(computerSelection,"ROCK")
            endScore.textContent = `${playerScore} - ${computerScore}`
    });
        btnScissors.addEventListener(`click`, () => {
            playRound(computerSelection,"SCISSORS")
            endScore.textContent = `${playerScore} - ${computerScore}`
    });
        btnPaper.addEventListener(`click`, () => {
            playRound(computerSelection,"PAPER")
            endScore.textContent = `${playerScore} - ${computerScore}`
        })
        buttons.forEach((button) => {
            button.addEventListener(`click`, () => {
                if (playerScore >= 5){
                    endScore.textContent = 'You win!...   (Your score: ' + playerScore + '  Computer: ' + computerScore + 
                ')', playerScore = 0, computerScore = 0;
                } else if(computerScore >= 5){
                endScore.textContent = 'You lose!...   (Your score: ' + playerScore + '  Computer: ' + computerScore + 
                ')', playerScore = 0, computerScore = 0;
                }
            });
        });
    
} 
playGame()