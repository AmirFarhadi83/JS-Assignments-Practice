'use strict';

// Selecting ELements
const musicEl = document.getElementById('music-file');
const musicIconEl = document.getElementById('music-icon');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//
musicIconEl.onclick = () => {
    if (musicEl.paused) {
        musicEl.play();
        musicIconEl.src = './assets/img/icons8-pause-100.png';
    } else{
        musicEl.pause();
        musicIconEl.src = './assets/img/icons8-play-100.png';
    }
}