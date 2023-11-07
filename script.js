'use strict';

document.querySelector('.check').addEventListener('click', function () {
   const guessingNumber = Number(document.querySelector('.number-input').value);
    console.log(typeof guessingNumber);

    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число';
    }
});




