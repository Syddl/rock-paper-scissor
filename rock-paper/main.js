let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
}

updateScore();

function playGame(playerMove){
    const computerMove = randomNumber();

    let result = "";

    if(playerMove === 'rock'){
        if(computerMove === "rock"){
            result = "Tie";
        }else if(computerMove === "paper"){
            result = "You lose";
        }else if(computerMove === "scissors"){
            result = "You win";
        }
    }else if(playerMove === 'paper'){
        if(computerMove === "rock"){
            result = "You win";
        }else if(computerMove === "paper"){
            result = "Tie";
        }else if(computerMove === "scissors"){
            result = "You lose";
        }
    }else if(playerMove === 'scissors'){
        if(computerMove === "rock"){
            result = "You lose";
        }else if(computerMove === "paper"){
            result = "You win";
        }else if(computerMove === "scissors"){
            result = "Tie";
        }
    }
    
    if(result === "You win"){
        score.wins += 1;
    }else if(result === "You lose"){
        score.losses += 1;
    }else if(result === "Tie"){
        score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score))
    
    updateScore();

    document.getElementById("result-el").innerHTML = result;

    document.getElementById("move-el").innerHTML = `You <img src="img/${playerMove}-emoji.png" alt="" class="pc pick"> <img src="img/${computerMove}-emoji.png" alt="" class="pc pick"> Computer`

}

function updateScore(){

    document.getElementById("score-el").textContent = `Wins: ${score.wins}, Losses ${score.losses}, Ties ${score.ties}`

}

function randomNumber(){
    let ranNum = Math.floor(Math.random() * 3 + 1);

    let computerMove = "";

    console.log(ranNum);
    
    if(ranNum === 1){
        computerMove = "rock";
    }else if(ranNum === 2){
        computerMove = "paper"
    }else if(ranNum === 3){
        computerMove = "scissors"
    }

    return computerMove;

}




