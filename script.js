'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document
    .querySelector('.close-modal-window');
const btnsShowModalWindow = document
    .querySelectorAll('.show-modal-window');
console.log(btnsShowModalWindow);

const showModelWindow = function () {
    console.log('Click!');
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModalWindow = function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModalWindow.length; i++) {
    btnsShowModalWindow[i].addEventListener('click',
        showModelWindow);
}

btnCloseModalWindow.addEventListener('click',
    closeModalWindow);
overlay.addEventListener('click', closeModalWindow);
