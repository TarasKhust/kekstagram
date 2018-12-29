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
    effectsItem = document.querySelectorAll('.effects__item');

let onPopupEscPress = (evt) => {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

let openPopup = () => {
  bigPicture.classList.remove('hidden');
  document.removeEventListener('keydown', onPopupEscPress)
};

let closePopup = () => {
  bigPicture.classList.add('hidden');
  imgUpload.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress)
};

let changeEventHandler = () => {
  imgUpload.classList.remove('hidden');
};

let setPhotoScale = (value) => {
  let ScaleValue = new Object();
    ScaleValue.MIN = 25;
    ScaleValue.STEP = 25;
    ScaleValue.MAX = 100;

  let currentScale = parseInt(scaleValueElement.value, 10);
  currentScale += ScaleValue.STEP * value;
  if (currentScale >= ScaleValue.MIN && currentScale <= ScaleValue.MAX) {
    scaleValueElement.value = currentScale + '%';
    currentScale = currentScale / 100;
    imgPreviewWrapperElement.style.transform = `scale(${currentScale})`;
  }
  return currentScale;
};

let addEffectsItem = () => {
  effectsItem.forEach((item, index, listObj) => {

  });
};
addEffectsItem();

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
  setPhotoScale(-1);
});

scaleBiggerElement.addEventListener('click', () => {
  setPhotoScale(1);
});