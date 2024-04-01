'use strict';

//////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const message = document.querySelector('.message');
const scoreContent = document.querySelector('.score');
const highScoreContent = document.querySelector('.highScore');
const number = document.querySelector('.number');
const guessContent = document.querySelector('.guess');

//////////////////////////////////

const scoreMines = () => {
  score--;
  scoreContent.textContent = score;
};

const lostGame = () => {
  displayMessage('💥 you lost the game');
  scoreContent.textContent = 0;
};

const tooHigh = () => {
  displayMessage('📈 Too High!');
  scoreMines();
};

const tooLow = () => {
  displayMessage('📉 Too Low!');
  scoreMines();
};

const displayMessage = (message) => {
  message.textContent = message;
};
const winStyles = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  number.style.width = '30rem';
};

const reset = () => {
  // window.location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreContent.textContent = score;
  number.textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessContent.value = '';
};

//////////////////////////////////

document.querySelector('.again').addEventListener('click', () => {
  reset();
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(guessContent.value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    winStyles();
    number.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      highScoreContent.textContent = highScore;
    }
  } else if (guess > secretNumber) {
    score > 1 ? tooHigh() : lostGame();
  } else if (guess < secretNumber) {
    score > 1 ? tooLow() : lostGame();
  }
});
