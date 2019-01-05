'use strict';

(function () {

  let mainElement = document.querySelector('main');
  let successModalTemplate = document.querySelector('#success').content.querySelector('.success');

  let closeModal = () => {
    let modalElement = mainElement.querySelector('.modal');
    mainElement.removeChild(modalElement);
    document.removeEventListener('keydown', onModalEscPress);
    modalElement.removeEventListener('click', onDocumentClick);
  };

  let onDocumentClick = (evt) => {
    if (evt.target.tagName === 'SECTION') {
      closeModal();
    }
  };

  let onModalEscPress = (evt) => {
    window.util.isEscEvent(evt, closeModal);
  };
  let showModalSucces = () => {
    document.addEventListener('keydown', onModalEscPress);
    mainElement.appendChild(successModalTemplate);
    successModalTemplate.querySelector('.success__button').addEventListener('click', () => {
      closeModal();
    });
    successModalTemplate.addEventListener('click', onDocumentClick);
  };

  window.success = {
    show: showModalSucces
  };

})();