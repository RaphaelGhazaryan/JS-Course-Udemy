'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn.-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // Check if 1  if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
