'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 8;

// document.querySelector('.guess').value = 2;

// console.log(document.querySelector('.guess').value = 2)





let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const message = document.querySelector('.message');
const scoreContent = document.querySelector('.score');
const highScoreContent = document.querySelector('.highScore');
const number = document.querySelector('.number');







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
  message.textContent  = message;
}
const winStyles = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

const reset = () => {
  // window.location.reload();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreContent.textContent = score;
  number.textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', () => {
  reset();
});

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

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
