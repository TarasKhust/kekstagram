'use strict';

(() => {

  const bigPicture = document.querySelector(`.big-picture`);
  const bigPictureCancel = bigPicture.querySelector(`.big-picture__cancel`);

  bigPictureCancel.addEventListener(`click`, () => closePhoto());

  const closePhoto = () => bigPicture.classList.add(`hidden`);

  const openPhoto = () => {
    bigPicture.classList.remove(`hidden`);
    bigPicture.querySelector(`.social__comments`).innerHTML = ``;
    document.addEventListener(`keydown`, onPhotoEscPress);
  };

  const onPhotoEscPress = (evt) => window.util.isEscEvent(evt, closePhoto);

  // window.gallery.appendPhotos();

  window.picture = {
    openPhoto: openPhoto
  };
})();
