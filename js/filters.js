'use strict';

(function () {
  let NEW_PICTURES_AMOUNT = 10;
  let DEBOUNCE_INTERVAL = 500;

  let timerID;

  let filtersElement = document.querySelector(`.img-filters`);
  let filterPopularElement = filtersElement.querySelector(`#filter-popular`);
  let filterNewElement = filtersElement.querySelector(`#filter-new`);
  let filterDiscussedElement = filtersElement.querySelector(`#filter-discussed`);

  let shuffleArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.round(Math.random() * (array.length - 1));
      let temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  };

  let setNewActiveFilter = (filterElement) => {
    let activeFilterElement = filtersElement.querySelector(`.img-filters__button--active`);
    if (activeFilterElement) {
      activeFilterElement.classList.remove(`img-filters__button--active`);
    }
    filterElement.classList.add(`img-filters__button--active`);
  };

  let removeFormerPictures = () => {
    let formerPictures = document.querySelectorAll(`.picture`);
    formerPictures.forEach(function (node) {
      node.remove();
    });
  };

  let updatePictures = (newDataArray) => {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(function () {
      removeFormerPictures();
      window.gallery.renderPhoto(newDataArray);
    }, DEBOUNCE_INTERVAL);
  };

  let filterPopularElementClickHandler = () => {
    setNewActiveFilter(filterPopularElement);
    window.filters.currentData = window.gallery.initialData;
    updatePictures(window.filters.currentData);
  };

  let filterNewElementClickHandler = () => {
    setNewActiveFilter(filterNewElement);
    let dataCopy = window.gallery.initialData.slice();
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
      removeFormerPictures();
      window.filters.currentData = shuffleArray(dataCopy).splice(0, NEW_PICTURES_AMOUNT);
      window.gallery.appendPhotos(window.filters.currentData);
    }, DEBOUNCE_INTERVAL);
  };

  let filterDiscussedElementClickHandler = () => {
    setNewActiveFilter(filterDiscussedElement);
    let dataCopy = window.gallery.initialData.slice();
    window.filters.currentData = dataCopy.sort(function (picture1, picture2) {
      return (picture2.comments.length - picture1.comments.length);
    });
    updatePictures(window.filters.currentData);
  };

  filterPopularElement.addEventListener(`click`, filterPopularElementClickHandler);
  filterNewElement.addEventListener(`click`, filterNewElementClickHandler);
  filterDiscussedElement.addEventListener(`click`, filterDiscussedElementClickHandler);

  window.filters = {
    filtersElement: filtersElement,
    currentData: []
  };
})();