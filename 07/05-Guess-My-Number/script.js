'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 8;

// document.querySelector('.guess').value = 2;

// console.log(document.querySelector('.guess').value = 2)

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let message = document.querySelector('.message');
let scoreContent = document.querySelector('.score');

let score = 20;
console.log(score);
const scoreMines = () => {
  score--;
  document.querySelector('.score').textContent = score;
};

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too High!';
      scoreMines();
    } else {
      message.textContent = '💥 you lost the game';
      scoreContent.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too Low!';
      scoreMines();
    } else {
      message.textContent = '💥 you lost the game';
      scoreContent.textContent = 0;
    }
  }
});
