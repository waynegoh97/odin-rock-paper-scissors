const choice = ["rock", "paper", "scissors"];

function getComputerChoice(){
  return choice.at(Math.floor(Math.random()*3));
}

function playerSelection(){
  let select = prompt("Rock Paper or Scissors?").toLowerCase();
  return select
}

function playRound(player, computer){
  switch(player) {
    case "rock":
      if (computer == "scissors"){
        return "You Win! Rock beats Scissors";
      }
      else if (computer == "paper"){
        return "You Lose! Rock lose to Paper";
      }
      else{
        return "Draw!";
      }
      
    case "paper":
      if (computer == "rock"){
        return "You Win! Paper beats Rock";
      }
      else if (computer == "scissors"){
        return "You Lose! Paper lose to Scissors";
      }
      else {
        return "Draw!";
      }

    case "scissors":
      if (computer == "paper"){
        return "You Win! Scissors beats Paper";
      }
      else if (computer == "rock"){
        return "You Lose! Scissors lose to Rock";
      }
      else{
        return "Draw!";
      }

    default:
      return "Incorrect Input!"

  }
}

function game(){
  let finalResult = 0;
  for(let i = 0; i<5; i++){
    let player = playerSelection();
    let comp = getComputerChoice();
    let currResult = playRound(player, comp);
    console.log(currResult);
    if (currResult.includes("Win")){
      finalResult++;
    }
  }
  if (finalResult > 2){
    console.log("You win the tournament!");
  }
  else{
    console.log("You lose the tournament!")
  }
}

game();