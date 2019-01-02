'use strict';
(function() {
  let openPicture = document.querySelectorAll('.picture'),
      bigPicture = document.querySelector('.big-picture'),
      closePicture = document.querySelector('#picture-cancel'),
      uploadFile = document.querySelector('.img-upload__input'),
      imgUpload = document.querySelector('.img-upload__overlay'),
      uploadCancel = document.querySelector('#upload-cancel');

  let onPopupEscPress = (evt) => {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };
  openPicture.forEach((value) => {
    if (value.classList.contains('picture')) {
      value.addEventListener('click', () => {
        openPopup();
      });
    } else {
      value.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 13) {
          openPopup();
          evt.stopPropagation();
        }
      });
    }
  });

  let openPopup = () => {
    bigPicture.classList.remove('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  let closePopup = () => {
    bigPicture.classList.add('hidden');
    imgUpload.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  let changeEventHandler = () => {
    imgUpload.classList.remove('hidden');
  };

  openPicture.forEach((value) => {
    if (value.classList.contains('picture')) {
      value.addEventListener('click', () => {
        openPopup();
      });
    } else {
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
    closePopup();
  });
})();