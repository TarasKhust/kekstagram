'use strict';

(function () {

  let bigPicture = document.querySelector('.big-picture');
  let bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

  bigPictureCancel.addEventListener('click', function () {
    closePhoto();
  });

  function closePhoto() {
    bigPicture.classList.add('hidden');
  }

  function openPhoto() {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.social__comments').innerHTML = '';
    document.addEventListener('keydown', onPhotoEscPress);
  }

  function onPhotoEscPress(evt) {
    window.util.isEscEvent(evt, closePhoto);
  }

  window.picture.appendPhotos();

  window.gallery = {
    openPhoto: openPhoto,
    closePhoto: closePhoto
  };
})();
