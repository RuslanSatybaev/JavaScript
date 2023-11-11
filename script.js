'use strict';

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;


const switchActivePlayer = function() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`)
    .textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

btnRoll.addEventListener('click', function() {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`)
        .textContent = currentScore;
    } else {
      switchActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function() {
  if (isPlaying) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`)
      .textContent = totalScores[activePlayer];

    if (totalScores[activePlayer] >= 20) {
      isPlaying = false;
      diceElement.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActivePlayer();
    }
  }
});
