let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
resetButton = document.querySelector('.resetButton');
guessField.focus();

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  
  guesses.textContent += userGuess + ' ';
  
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.classList.toggle('wrongAnswer');
    lastResult.classList.add('rightAnswer');
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lastResult.classList.add('gameOver');
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.classList.add('wrongAnswer');
    lowOrHi.textContent = (userGuess < randomNumber) ? 'Last guess was too low!' : 'Last guess was too high!';
  }
  
  guessCount++;
  console.log(guessCount);
  guessField.value = '';
  guessField.focus;
}

document.addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
  
  return;
});


document.addEventListener('click', function(event) {
  if (event.target.closest('.guessSubmit')) {
    checkGuess();
  }
  
  if (event.target.closest('.resetButton')) {
    resetGame();
  }
  
  return;
  
});

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton.classList.toggle('resetButton--hidden');
  resetButton.classList.toggle('resetButton--show');
}

const resetGame = () => {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  
  resetButton.classList.toggle('resetButton--show');
  resetButton.classList.toggle('resetButton--hidden');
  
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  
  lastResult.classList.remove('gameOver');
  lastResult.classList.remove('wrongAnswer');
  lastResult.classList.remove('rightAnswer');
  
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
