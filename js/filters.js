'use strict';

(function () {
  let NEW_PHOTO_NUMBER = 10;

  // let photos = [];
  // photos = window.data.get();
  // console.log(photos);

  let Filter = {
    POPULAR: 'filter-popular',
    NEW: 'filter-new',
    DISCUSSED: 'filter-discussed'
  };
  let imgFilters = document.querySelector('.img-filters'),
      imgFiltersForm = imgFilters.querySelector('.img-filters__form'),
      imgFiltersButton = imgFilters.querySelectorAll('.img-filters__button');

  let renderNewPhoto = function (array) {
    let arrayCopy = array.slice();
    let arrayNewPhoto = [];
    let count = NEW_PHOTO_NUMBER;
    for (let i = 0; i < count; i++) {
      let index = window.data.getRandomInteger(i, arrayCopy.length - 1);
      let tmp = arrayCopy[index];
      arrayCopy[index] = arrayCopy[i];
      arrayCopy[i] = tmp;
      arrayNewPhoto.push(tmp);
    }
    return arrayNewPhoto;
  };

  let renderCommentsPhoto = function (array) {
    let arrayCopy = array.slice();
    arrayCopy.sort(function (first, second) {
      if (first.comments.length < second.comments.length) {
        return 1;
      } else if (first.comments.length > second.comments.length) {
        return -1;
      }
      return 0;
    });
    return arrayCopy;
  };

  let changeClassButton = (evt) => {
    imgFiltersButton.forEach((element) => {
      element.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
  };


  let changeFilter = /* window.debounce( */ function (evt) {
    window.picture.clean();
    // let target = evt.target;

    switch (evt.target.id) {
      case Filter.POPULAR:
        // console.log('популярные');
        window.picture.render(window.data.get(), window.bigPicture.show);
        break;
      case Filter.NEW:
        // console.log('новые');
        window.picture.render(renderNewPhoto(window.data.get()), window.bigPicture.show);

        break;
      case Filter.DISCUSSED:
        // console.log('обсуждаемые');
        window.picture.render(renderCommentsPhoto(window.data.get()), window.bigPicture.show);
        break;
    }
  }/* ) */;

  imgFiltersForm.addEventListener('click', (evt) => {
    // let target = evt.target;

    // changeFilter(evt);
    changeClassButton(evt);
  });

  window.filter = {
    show: function () {
      imgFilters.classList.remove('img-filters--inactive');
    }
  };
})();