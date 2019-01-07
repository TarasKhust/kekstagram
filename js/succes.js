'use strict';

(() => {

  let mainElement = document.querySelector('main');
  let successModalTemplate = document.querySelector('#success').content.querySelector('.success');

  let onDocumentClick = (evt) => {
    if (evt.target.tagName === 'SECTION') {
      window.error.closeModal();
    }
  };

  let onModalEscPress = (evt) => {
    window.util.isEscEvent(evt, window.error.closeModal(successModalTemplate));
  };
  let showModalSucces = () => {
    document.addEventListener('keydown', onModalEscPress);
    mainElement.appendChild(successModalTemplate);
    successModalTemplate.querySelector('.success__button').addEventListener('click', () => {
      window.error.closeModal(successModalTemplate);
    });
    successModalTemplate.addEventListener('click', onDocumentClick);
  };

  window.success = {
    show: showModalSucces
  };

})();