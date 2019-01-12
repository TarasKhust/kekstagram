'use strict';

(() => {

  let bigPicture = document.querySelector(`.big-picture`);
  let bigPictureCancel = bigPicture.querySelector(`.big-picture__cancel`);

  bigPictureCancel.addEventListener(`click`, () => {
    closePhoto();
  });

  let closePhoto = () => {
    bigPicture.classList.add(`hidden`);
  };

  let openPhoto = () => {
    bigPicture.classList.remove(`hidden`);
    bigPicture.querySelector(`.social__comments`).innerHTML = ``;
    document.addEventListener(`keydown`, onPhotoEscPress);
  };

  let onPhotoEscPress = (evt) => {
    window.util.isEscEvent(evt, closePhoto);
  };

  // window.gallery.appendPhotos();

  window.picture = {
    openPhoto: openPhoto
  };
})();
