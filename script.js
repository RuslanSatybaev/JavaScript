'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.question').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(typeof guessingNumber);

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!';
    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
        document.querySelector('.question').style.width = '50rem';
    } else if (guessingNumber > secretNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком много!';
            score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Вы проиграли!';
            document.querySelector('.score').textContent = 0;
        }

    } else if (guessingNumber < secretNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = 'Слишком мало!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.guess-message').textContent = 'Вы проиграли!';
            document.querySelector('.score').textContent = 0;
        }
    }

});




