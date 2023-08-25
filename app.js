let userScore = 0;
let pcScore = 0 ;
const userScore_span =document.getElementById("userscore");
const pcScore_span =document.getElementById("pcscore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div =document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getcompterchoice(){
    const choices =['r' ,'p' ,'s'];
    const randomnumber = Math.floor(Math.random() *3);
    return choices[randomnumber];
}


function conerttoworrd(letter){
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    // if (letter === "s") 
    return "SCISSOR";
}

function win(user, computer){
userScore++;
userScore_span.innerHTML = userScore;
pcScore_span.innerHTML = pcScore;
const smallUserWord = "👨".fontsize(3).sub();
const smallcomputerword = "🤖".fontsize(3).sub();
result_div.innerHTML = `${conerttoworrd(user)}${smallUserWord} beats ${conerttoworrd(computer)}${smallcomputerword} YOU WIN!🔥`;
document.getElementById(user).classList.add('greenglow');
setTimeout(() => document.getElementById(user).classList.remove('greenglow'), 300);//you can write like this also js instead of below lines like.

}



function lose(user, computer){
    pcScore++;
    userScore_span.innerHTML = userScore;
    pcScore_span.innerHTML = pcScore;
    const smallUserWord = "👨".fontsize(3).sub();
    const smallcomputerword = "🤖".fontsize(3).sub();
    result_div.innerHTML = `${conerttoworrd(user)}${smallUserWord} loses to ${conerttoworrd(computer)}${smallcomputerword} YOU LOST!💩`; 
    document.getElementById(user).classList.add('redglow');
    setTimeout(function(){ document.getElementById(user).classList.remove('redglow')}, 300);   
}

function draw(user, computer){
    const smallUserWord = "👨".fontsize(3).sub();
    const smallcomputerword = "🤖".fontsize(3).sub();
    result_div.innerHTML = `${conerttoworrd(user)}${smallUserWord} = ${conerttoworrd(computer)}${smallcomputerword} DRAW!`;
    document.getElementById(user).classList.add('grayglow');
    setTimeout(function(){ document.getElementById(user).classList.remove('grayglow')}, 300);
        
}

function Game(userChoice){
    const computerchoice = getcompterchoice();
    switch (userChoice + computerchoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice , computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice , computerchoice);
            break;     
  }}


function main()
{
    rock_div.addEventListener('click' , () => Game("r")); //you can write like this also js instead of below lines like.

    paper_div.addEventListener('click' , function(){
        Game("p");
    })
    scissors_div.addEventListener('click' , function(){
        Game("s");
    })
}

main();