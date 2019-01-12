'use strict';

(() => {

  let photos = [];

  let pictureTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`),
      picturesBlock = document.querySelector(`.pictures`),
      imgFilters = document.querySelector(`.img-filters`);

  let renderPhoto = (value) => {
    let photoElement = pictureTemplate.cloneNode(true);

    photoElement.querySelector(`.picture__img`).src = value.url;
    photoElement.querySelector(`.picture__likes`).textContent = value.likes;
    photoElement.querySelector(`.picture__comments`).textContent = value.comments.length;

    photoElement.addEventListener(`click`, () => {
      window.picture.openPhoto();
      window.preview.renderBigPicture(value);
    });
    return photoElement;
  };

  let appendPhotos = () => {
    let fragment = document.createDocumentFragment();

    photos = window.data.generatePhotos();
    photos.forEach((value) => {
      fragment.appendChild(renderPhoto(value));
    });

    picturesBlock.appendChild(fragment);
  };

  window.gallery = {
    initialData: [],
    appendPhotos: appendPhotos,
    renderPhoto: renderPhoto
  };

  let successLoadHandler = function (data) {
    window.gallery.initialData = data;
    window.filters.currentData = data;
    window.filters.filtersElement.classList.remove(`img-filters--inactive`);
    appendPhotos();
  };

  let loadGalleryPhoto = (callback) => {
    window.backend.load(successLoadHandler);
    callback();
  };

  loadGalleryPhoto(() => {
    imgFilters.classList.remove(`img-filters--inactive`);
  });

})();

