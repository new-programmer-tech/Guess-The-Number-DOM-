'use strict';

// console.log(document.querySelector('.right').textContent);

// document.querySelector('.message').textContent = 'good correct answer ';

//NUMBER GENeRATER:-

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

/*button*/

document.querySelector('.check').addEventListener(
  //check = button name ,,, //addEventListener =method
  'click',
  function () {
    //value =to get the value that in entered.
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //if there is no guess then:-

    if (!guess) {
      document.querySelector('.message').textContent = `input a number`;
    } else if (guess > number) {
      if (score > 0) {
        document.querySelector('.message').textContent = `number is greater`;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = `you lost the game`;
        document.body.style.backgroundColor = '#df4141';
      }
    } else if (guess < number) {
      if (score > 1) {
        document.querySelector('.message').textContent = `number is small`;
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = `you lost the game`;
        document.body.style.backgroundColor = '#df4141';
      }
    } else if (guess === number) {
      document.querySelector('.number').textContent = number;
      document.querySelector('.message').textContent = `Correct Number`;
      document.querySelector('.high-score').textContent = number;
      document.body.style.backgroundColor = '#43a825';
      document.querySelector('.number').style.width = '35rem';
      document.querySelector('.number').style.fontSize = '7.2rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.high-score').textContent = highScore;
      }
    }
  }
);

// AGAIN

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = `select a number`;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.high-score').textContent = highScore;
  document.body.style.backgroundColor = '#222';
});
