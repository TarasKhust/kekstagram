'use strict';

let openPicture = document.querySelectorAll('.picture'),
    bigPicture = document.querySelector('.big-picture'),
    closePicture = document.querySelector('#picture-cancel'),
    uploadFile = document.querySelector('.img-upload__input'),
    imgUpload = document.querySelector('.img-upload__overlay'),
    uploadCancel = document.querySelector('#upload-cancel'),
    scaleElement = document.querySelector('.img-upload__scale'),
    scaleValueElement = scaleElement.querySelector('.scale__control--value'),
    scaleSmallerElement = scaleElement.querySelector('.scale__control--smaller'),
    imgPreviewWrapperElement = document.querySelector('.img-upload__preview'),
    scaleBiggerElement = scaleElement.querySelector('.scale__control--bigger'),
    effectLevelElement = document.querySelector('.effect-level'),
    effectsListElement = document.querySelector('.effects__list');

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
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress)
}

function changeEventHandler() {
  imgUpload.classList.remove('hidden');
}

function setPhotoScale(value) {
  let ScaleValue = {
    MIN: 25,
    STEP: 25,
    MAX: 100,
    DEFAULT: 100
  };
  let currentScale = parseInt(scaleValueElement.value, 10);
  currentScale += ScaleValue.STEP * value;
  if (currentScale >= ScaleValue.MIN && currentScale <= ScaleValue.MAX) {
    scaleValueElement.value = currentScale + '%';
    currentScale = currentScale / 100;
    imgPreviewWrapperElement.style.transform = `scale(${currentScale})`;
  }
  return currentScale;
}
setPhotoScale(-1)
openPicture.forEach((value) => {
  if (value.classList.contains('picture')) {
    value.addEventListener('click', () => {
      openPopup();
    });
  } else  {
    value.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 13) {
        openPopup();
        evt.stopPropagation();
      }
    });
  }
});

closePicture.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 13 || evt.keyCode === 27) {
    closePopup();
    evt.stopPropagation();
  }
});

uploadFile.addEventListener('change', () => {
  changeEventHandler();
});

uploadCancel.addEventListener('click', () => {
  closePopup()
});

scaleSmallerElement.addEventListener('click', () => {
  setPhotoScale(-1)
});

scaleBiggerElement.addEventListener('click', function () {
  setPhotoScale(1);
});