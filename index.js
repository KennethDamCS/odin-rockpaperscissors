const choices = ["rock", "paper", "scissor"];
const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(playerSelection == "rock" && computerSelection == "scissor" || 
       playerSelection == "scissor" && computerSelection == "paper" ||
       playerSelection == "paper" && computerSelection == "rock"){
        return "Player";
       }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a tie";
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You  Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissor");
        if(choice  ==  null){
            continue;
        }
        const  choiceInLower  = choice.toLowerCase();
        if(choices.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for(let i = 0; i <  5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) ==  "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) ==  "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    console.log(`Player  ${scorePlayer} - ${scoreComputer} Computer`)
}

game();