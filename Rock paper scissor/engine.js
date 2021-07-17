var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p ");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissor");

function getcomputerChoice (){
    const choices =['r', 'p' , 's'];
    const randomNumber =  Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "paper";
    if(letter === 's') return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow'), 3000});
}

function lose(userChoice, computerChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You lose!`;
    
}

function draw(userChoice, computerChoice){
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(computerChoice)}${smallCompWord} . It's draw!`;
    
}

function game(userChoice){
    const computerChoice = getcomputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    }) 
}
main();