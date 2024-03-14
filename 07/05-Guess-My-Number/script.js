'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 8;

// document.querySelector('.guess').value = 2;

// console.log(document.querySelector('.guess').value = 2)

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let message = document.querySelector('.message');
let scoreContent = document.querySelector('.score');
let number = document.querySelector('.number');

let score = 20;

const scoreMines = () => {
  score--;
  document.querySelector('.score').textContent = score;
};

const lostGame = () => {
  message.textContent = '💥 you lost the game';
  scoreContent.textContent = 0;
};

const tooHigh = () => {
  message.textContent = '📈 Too High!';
  scoreMines();
};

const tooLow = () => {
  message.textContent = '📉 Too Low!';
  scoreMines();
};

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
    message.textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', () => {
    reset();
})

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
      winStyles();
      number.textContent = secretNumber;
  } else if (guess > secretNumber) {
    score > 1 ? tooHigh() : lostGame();
  } else if (guess < secretNumber) {
    score > 1 ? tooLow() : lostGame();
  }
});
