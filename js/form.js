'use strict';

(function () {

  let uploadElement = document.querySelector('.img-upload');
  let uploadFileElement = uploadElement.querySelector('#upload-file');
  let uploadPopupElement = uploadElement.querySelector('.img-upload__overlay');
  let uploadPopupCloseElement = uploadElement.querySelector('#upload-cancel');
  let hashtagElement = document.querySelector('.text__hashtags');
  let descriptionElement = document.querySelector('.text__description');

  function openForm() {
    uploadPopupElement.classList.remove('hidden');
    document.addEventListener('keydown', onFormEscPress);
  }

  function closeForm() {
    uploadPopupElement.classList.add('hidden');
    document.removeEventListener('keydown', onFormEscPress);
  }

  let onFormEscPress = function (evt) {
    window.util.isEscEvent(evt, closeForm);
  };

  uploadFileElement.addEventListener('change', function () {
    openForm();
  });

  uploadPopupCloseElement.addEventListener('click', function () {
    closeForm();
  });
  hashtagElement.addEventListener('focusin', function () {
    document.removeEventListener('keydown', onFormEscPress);
  });

  hashtagElement.addEventListener('focusout', function () {
    document.addEventListener('keydown', onFormEscPress);
  });

  descriptionElement.addEventListener('focusin', function () {
    document.removeEventListener('keydown', onFormEscPress);
  });

  descriptionElement.addEventListener('focusout', function () {
    document.addEventListener('keydown', onFormEscPress);
  });

})();
