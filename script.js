const guessField = document.getElementById("guessField");
const highOrLow = document.getElementById("highOrLow");
const previousGuess = document.getElementById("previousGuess");
const rightOrWrong = document.getElementById("rightOrWrong");
const submitButton = document.getElementById("submitButton");
const paras = document.querySelectorAll("p");
const container = document.getElementsByTagName("div")[0];
const userGoesSpan = document.getElementsByTagName("span")[0];
let randomNumber;
let userGuess;
let userGoes = 10;

// guessField.focus();

var generateNumber =()=> {
   randomNumber = Math.floor(Math.random() * 100) + 1;
}

generateNumber();

var submitGuess =()=> {
 userGoes--;
 userGoesSpan.innerHTML = userGoes;
 userGuess = Number(guessField.value);
 guessField.value = "";
 
  if (userGoes === 9) {
    previousGuess.textContent = "Your Guesses:";
   }
  
  previousGuess.textContent += " " + userGuess + " ";
  
  if (userGuess === randomNumber) {
    rightOrWrong.textContent = "YOU WIN!";
    rightOrWrong.style.backgroundColor = "green";
    rightOrWrong.style.color = "white";
    gameOver();
  } 
  
  if (userGoes === 0) {
     rightOrWrong.textContent = "!!!GAME OVER!!!";
     rightOrWrong.style.backgroundColor = "red";
     rightOrWrong.style.color = "white";
     gameOver();
  } 
    else if (userGuess != randomNumber) {
    rightOrWrong.textContent = "Try Again!";
    rightOrWrong.style.backgroundColor = "orange";
    rightOrWrong.style.color = "white";
  } if (userGuess > randomNumber) {
      highOrLow.textContent = "Your Guess is too High!";
      }
    else if (userGuess < randomNumber) {
      highOrLow.textContent = "Your Guess is too Low!";
  }
    };
  

submitButton.addEventListener("click", submitGuess);

 var resetGame =()=> {
  submitButton.disabled = false;
  guessField.disabled = false;
  guessField.value = "";
  userGoes = 10;
  resetButton.remove();
  generateNumber();
  userGoesSpan.innerHTML = "10";
    
  
    for (i=0; i < paras.length; i++) {
      paras[i].textContent = "";
  }};




// diables buttons / text field when game is over

var gameOver =()=> {
  highOrLow.textContent = "";
  submitButton.disabled = true;
  guessField.disabled = true;
  resetButton = document.createElement("button");
  buttonText = document.createTextNode("Play Again?");
  resetButton.appendChild(buttonText);
  container.appendChild(resetButton);
  resetButton.addEventListener("click", ()=> {
  resetGame();
})};
 
 

// change color of userGoesSpan green - orange - red
