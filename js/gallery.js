'use strict';

(() => {

  let PHOTOS_COUNT = 25;

  let photos = [];

  let pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  let picturesBlock = document.querySelector('.pictures');

  let renderPhoto = (photo) => {
    let photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    photoElement.addEventListener('click', () => {
      window.gallery.openPhoto();
      window.preview.renderBigPicture(photo);
    });
    return photoElement;
  };

  let appendPhotos = () => {
    let fragment = document.createDocumentFragment();

    photos = window.data.generatePhotos(PHOTOS_COUNT);
    photos.forEach((value) => {
      fragment.appendChild(renderPhoto(value));
    });

    picturesBlock.appendChild(fragment);
  };

  window.picture = {
    appendPhotos: appendPhotos
  };

  window.backend.load(appendPhotos);

})();
