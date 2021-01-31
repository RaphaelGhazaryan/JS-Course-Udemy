'use strict';

const rollDice = document.querySelector('btn btn--roll'); 
const rolling = Math.trunc(Math.random() * 6);
rollDice.addEventListener('click', rolling)