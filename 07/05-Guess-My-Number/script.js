'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 8;

// document.querySelector('.guess').value = 2;

// console.log(document.querySelector('.guess').value = 2)

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
});
