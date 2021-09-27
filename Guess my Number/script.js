'use strict';

// ELEMENTS
const resetBtn = document.querySelector('.reset');
const guessNumResult = document.querySelector('.guess-num-result');
const numInput = document.querySelector('.num-input');
const userInputResult = document.querySelector('.user');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const button = document.querySelector('.btn');
const between = document.querySelector('.between');
const guessGameContainer = document.querySelector('.guess-game');

let secretNum = Math.trunc(Math.random() * 20) + 1;
let userScore = 20;
let userHighScore = 0;

score.textContent = userScore;
highScore.textContent = userHighScore;

// functions
const message = message => {
  userInputResult.textContent = message;
};

const resetFunctionality = function () {
  console.log('clicked');
  secretNum = Math.trunc(Math.random() * 20) + 1;
  userScore = 20;
  score.textContent = userScore;
  numInput.value = '';
  guessNumResult.classList.remove('animate');

  guessNumResult.textContent = '?';
  guessGameContainer.style.backgroundColor = ' rgb(41, 38, 38)';
  userInputResult.textContent = 'Start guessing ...';
};

const userInputHandler = function () {
  const userNumValue = +numInput.value;

  if (!userNumValue) {
    message('⛔ No Number');
  } else if (userNumValue === secretNum) {
    message('🤜 Correct Number');

    guessNumResult.textContent = secretNum;
    guessGameContainer.style.backgroundColor = 'green';
    numInput.style.backgroundColor = 'white';
    numInput.style.color = 'black';
    guessNumResult.style.width = '17rem';
    guessNumResult.classList.add('animate');
    button.style.backgroundColor = '#5f3dc4';
    checkBtn.style.backgroundColor = '#5f3dc4';
    between.style.color = 'white';

    if (userScore > userHighScore) {
      userHighScore = userScore;
      highScore.textContent = userHighScore;
    }
  } else if (userNumValue > secretNum) {
    if (userScore >= 1) {
      message('📉 Too High!');
      userScore--;
    }
    score.textContent = userScore;
    userScore < 1 && message('😔 You Lose');
  } else if (userNumValue < secretNum) {
    if (userScore >= 1) {
      message('📈 Too Low!');
      userScore--;
    }
    score.textContent = userScore;
    userScore < 1 && message('😔 You Lose');
  }
};

checkBtn.addEventListener('click', userInputHandler);

resetBtn.addEventListener('click', resetFunctionality);
