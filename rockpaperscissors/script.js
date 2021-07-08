//const variables

const ROCK = "rock";
const PAPER = "paper";
const SCRISSORS = "scissors"
const options = [ROCK, PAPER, SCRISSORS];
const rockWin = "You win! Rock breaks scissors.";
const rockLose = "You lose! Paper covers rock."
const paperWin = "You win! Paper covers rock.";
const paperLose = "You lose! Scissors cut paper."
const sciWin = "You win! Scissors cut paper.";
const sciLose = "You lose! Rock breaks scissors."

//func to randomize computer choice between rock,paper,scissors
function computerPlay(){
    return options[Math.floor(Math.random() * 3)];
}
//who wins or loses based on pick and adding points
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
     messages.textContent = `IT'S A TIE! NO POINTS!`;

    } else if (playerSelection == ROCK && computerSelection == PAPER){
        aiScore += 1;
        messages.textContent = rockLose;

    } else if (playerSelection == ROCK && computerSelection == SCRISSORS){
        playerScore += 1;
        messages.textContent = rockWin;

    } else if (playerSelection == PAPER && computerSelection == ROCK){
        playerScore += 1;
        messages.textContent = paperWin;

    } else if (playerSelection == PAPER && computerSelection == SCRISSORS){
        aiScore += 1;
        messages.textContent = paperLose;

    } else if (playerSelection == SCRISSORS && computerSelection == ROCK){
        aiScore += 1;
        messages.textContent = sciLose;
    } else {
        playerScore += 1;
        messages.textContent = sciWin;
    }
}
//defining choice variables
let playerSelection;
let computerSelection;

// function for a number of rounds
let playerScore = 0;
let aiScore = 0;

const myscore = document.querySelector("#mescore");
const aiscore = document.querySelector("#aiscore");
const messages = document.querySelector(".msgs");
//game function
function game(){
            playRound(playerSelection, computerSelection);
            if (playerScore == 5){
                ending("You Win!")
            } else if (aiScore == 5) {
                ending("AI rules supreme!")}
            myscore.textContent = playerScore;
            aiscore.textContent = aiScore;
    
}
//when the game ends run a retry function
function ending(text){
    const message = document.querySelector("#ending");
    message.textContent = text;
    playerScore = 0;
        aiScore = 0;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button =>{
        button.style.cssText = "display: none;"
    })
    const retry = document.createElement("button");
    retry.className = "pointer";
    const img = document.createElement("img");
    retry.appendChild(img);
    img.src = "retry.svg";
    img.alt = "retry";
    img.id = "retry"
    const container = document.querySelector("#container");
    container.appendChild(retry);
    function playagain(){
        message.textContent = "Rock, Paper, Scissors";
        buttons.forEach(button =>{
            button.style.cssText = "display: default"
            retry.remove();
        })
    }
    retry.addEventListener("click", playagain)

}


//selected buttons to listen for event
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scibutton = document.querySelector("#scissors");
//onclick function
const pick = function(e){
    playerSelection = e.target.alt;
    console.log(e.target.alt)
    computerSelection = computerPlay();
    game()
}

rockbutton.addEventListener("click", pick)
paperbutton.addEventListener("click", pick)
scibutton.addEventListener("click", pick)