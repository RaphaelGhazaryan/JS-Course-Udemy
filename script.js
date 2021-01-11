'use strict';

//Dom Manipulation and Selection

/*// for textcontent
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.number').textContent);
console.log(document.querySelector('.score').textContent);

document.querySelector('.message').textContent = 'Correct !';
document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 20;

// for input field
document.querySelector('.guess').value = 10; */

//Click Events
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please type in a valid number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !! Woho';
  } else if (guess > secretNumber) {
    (document.querySelector('.message').textContent = 'Too high! Try again'),
      score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    (document.querySelector('.message').textContent = 'Too low! Try again'),
      score--;
    document.querySelector('.score').textContent = score;
  }
});
