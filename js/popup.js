'use strict';

let openPicture = document.querySelectorAll('.picture'),
    bigPicture = document.querySelector('.big-picture'),
    closePicture = document.querySelector('#picture-cancel');

function onPopupEscPress(evt) {
  if (evt.keyCode === 27) {
    closePopup()
  }
}

function openPopup() {
  bigPicture.classList.remove('hidden');
  document.removeEventListener('keydown', onPopupEscPress)
}

function closePopup() {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress)
}

openPicture.forEach((value) => {
  if (value.classList.contains('picture')) {
    value.addEventListener('click', () => {
      openPopup();
    });
  } else  {
    value.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 13) {
        openPopup()
      }
    });
  }
});



closePicture.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13 || evt.keyCode === 27) {
    closePopup()
  }
});