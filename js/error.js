'use strict';

(() => {

  let mainElement = document.querySelector('main');
  let errorModalTemplate = document.querySelector('#error').content.querySelector('.error');

  let onDocumentClick = (evt) => {
    if (evt.target.tagName === 'SECTION') {
      closeModal();
    }
  };

  let closeModal = () => {
    let modalElement = mainElement.querySelector('.modal');
    mainElement.removeChild(modalElement);
    document.removeEventListener('keydown', onModalEscPress);
    modalElement.removeEventListener('click', onDocumentClick);
  };

  let onModalEscPress = (evt) => {
    window.util.isEscEvent(evt, closeModal);
  };

  let showModalError = (text) => {
    mainElement.appendChild(errorModalTemplate);
    errorModalTemplate.querySelector('.error__title').textContent = text;
    errorModalTemplate.querySelector('.error__button').addEventListener('click', () => {
      closeModal();
    });
    errorModalTemplate.addEventListener('click', onDocumentClick);
    document.addEventListener('keydown', onModalEscPress);
  };

  window.error = {
    show: showModalError
  };

})();