'use strict';

// Seed random (random number between 1 and 20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initial scores
let score = 20;
let highscore = 0;

// Functions
const resetBoxesGuessAndNumber = () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};
const setnumberWidth = (width) =>
  (document.querySelector('.number').style.width = width);

const backgroundColor = (color) =>
  (document.getElementsByTagName('body')[0].style.backgroundColor = color);

const writteMessage = (message) =>
  (document.querySelector('.message').textContent = message);

const setScore = (score) =>
  (document.querySelector('.score').textContent = score);

const setHighScore = (score) =>
  (document.querySelector('.highscore').textContent = score);

const showSecretNumber = (number) =>
  (document.querySelector('.number').textContent = secretNumber);

const scoreDecrease = () => {
  if (score > 1) {
    score--;
    setScore(score);
  } else {
    writteMessage('You lose the game...');
    setScore(0);
  }
};

// Event listener by clicking button to catch the number to guess
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // Game logic ...
  if (!guess) {
    // When there is no input
    writteMessage('No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    writteMessage("That's it!  You got it!");
    showSecretNumber(secretNumber);
    backgroundColor('#60b347');
    setnumberWidth('30rem');
    highscore = score > highscore ? setHighScore(score) : 0;

    // When the guess is to high
  } else if (guess !== secretNumber) {
    writteMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    scoreDecrease();
  }
});

// Event listener to set a new round by clicking button (again!)
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  resetBoxesGuessAndNumber();
  writteMessage('Start guessing...');
  setScore(score);
  setnumberWidth('15rem');
  backgroundColor('#222');
});
