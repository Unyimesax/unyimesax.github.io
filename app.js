/*  1. Create and store all DOM variables to be used .  
    2. Create a function that generates a random choice.
    3. Create a function that targets the buttons on the page(use addEventListener)
    4. Create a game function that takes the click function and compares
        it with  computer choice . Use switch statements for your comparison.
    5. Create a function for win, loss and draw.this function should carryout 
       everything you want to happen in the game when buttons are clicked.
    6.  
    
    
    
    */

let counter = 0;
let userScore = 0;
let computerScore = 0;
const scoreBoard_div = document.getElementById("score-board");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");



function getcomputerChoice(){
    let choice = ["rock","paper", "scissors"]
    let randomChoice = Math.floor(Math.random()*choice.length);
    return choice[randomChoice];

}
function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = userChoice.toUpperCase() + " beats " + computerChoice.toUpperCase() + "...You win!" 
    userChoice_div.classList.add("green-glow");
    setTimeout(function(){userChoice_div.classList.remove("green-glow")},400);

}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML = computerChoice.toUpperCase() + " beats " + userChoice.toUpperCase() + "...You lose!" 
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){userChoice_div.classList.remove("red-glow")},400);

}
   

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = userChoice.toUpperCase() + " equals " + computerChoice.toUpperCase() + "...It's a DRAWW!" 
    userChoice_div.classList.add("grey-glow");
    setTimeout(function(){userChoice_div.classList.remove("grey-glow")},400);
}




function game(userChoice){
    let computerChoice = getcomputerChoice();

    switch(userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win(userChoice, computerChoice);
        break;

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
        lose(userChoice, computerChoice);
        break;

        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
        draw(userChoice, computerChoice);
        break;

    }
}

function main(){
    rock_div.addEventListener('click', function(){
       game("rock")
       
    });

    paper_div.addEventListener('click', function(){
        game("paper")
      
    });

    scissors_div.addEventListener('click', function(){
        game("scissors")
       
    });

  
};

console.log(counter);
main();


