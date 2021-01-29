'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');

// saving space and not repeating code
const openModal = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// opening modal on btn click and blurr overlay
for (let i = 0; i < btns.length; i++)
btns[i].addEventListener('click', openModal);

// creating function to close modal to save space and not to repeat code
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// closing modal on btn click and on overlay click
btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener("keydown", function(event){
  //console.log(event.key)

  if (event.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
   
  }
});