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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '? ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When  there is no input
  if (!guess) {
    displayMessage('Please type in a valid number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !! Woho');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When number is too high or too low or loses
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too high! Try again' : 'Too low! Try again!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game :(';
      document.querySelector('.score').textContent = 0;
    }
  }
});
