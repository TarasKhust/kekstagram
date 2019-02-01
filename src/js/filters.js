'use strict';

(() => {
  const NEW_PICTURES_AMOUNT = 10;
  const DEBOUNCE_INTERVAL = 500;

  let timerID;

  const filtersElement = document.querySelector(`.img-filters`);
  const filterPopularElement = filtersElement.querySelector(`#filter-popular`);
  const filterNewElement = filtersElement.querySelector(`#filter-new`);
  const filterDiscussedElement = filtersElement.querySelector(
      `#filter-discussed`);

  const shuffleArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      const randomIndex = Math.round(Math.random() * (array.length - 1));
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  };

  const setNewActiveFilter = (filterElement) => {
    const activeFilterElement = filtersElement.querySelector(
        `.img-filters__button--active`);
		activeFilterElement ? activeFilterElement.classList.remove(
				`img-filters__button--active`) :
				filterElement.classList.add(`img-filters__button--active`);
  };

  const removeFormerPictures = () => {
    const formerPictures = document.querySelectorAll(`.picture`);
		formerPictures.forEach((node) => {
      node.remove();
    });
  };

  const updatePictures = (newDataArray) => {
    if (timerID) {
      clearTimeout(timerID);
    }
		timerID = setTimeout(function() {
      removeFormerPictures();
      window.gallery.renderPhoto(newDataArray);
    }, DEBOUNCE_INTERVAL);
  };

  const filterPopularElementClickHandler = () => {
    setNewActiveFilter(filterPopularElement);
    window.filters.currentData = window.gallery.initialData;
    updatePictures(window.filters.currentData);
  };

  const filterNewElementClickHandler = () => {
    setNewActiveFilter(filterNewElement);
    const dataCopy = window.gallery.initialData.slice();
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
      removeFormerPictures();
			window.filters.currentData = shuffleArray(dataCopy).
					splice(0, NEW_PICTURES_AMOUNT);
      window.gallery.appendPhotos(window.filters.currentData);
    }, DEBOUNCE_INTERVAL);
  };

  const filterDiscussedElementClickHandler = () => {
    setNewActiveFilter(filterDiscussedElement);
    const dataCopy = window.gallery.initialData.slice();
		window.filters.currentData = dataCopy.sort(function(picture1, picture2) {
      return (picture2.comments.length - picture1.comments.length);
    });
    updatePictures(window.filters.currentData);
  };

	filterPopularElement.addEventListener(`click`,
			filterPopularElementClickHandler);
  filterNewElement.addEventListener(`click`, filterNewElementClickHandler);
	filterDiscussedElement.addEventListener(`click`,
			filterDiscussedElementClickHandler);

  window.filters = {
    filtersElement: filtersElement,
		currentData: [],
  };
})();