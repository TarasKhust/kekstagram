'use strict';

(() => {

  let mainElement = document.querySelector(`main`),
      errorModalTemplate = document.querySelector(`#error`).content.querySelector(`.error`);

  let onDocumentClick = (evt) => {
    if (evt.target.tagName === `SECTION`) {
      closeModal();
    }
  };

  let closeModal = (remove) => {
    mainElement.removeChild(remove);
    document.removeEventListener(`keydown`, onModalEscPress);
    document.removeEventListener(`click`, onDocumentClick);
  };

  let onModalEscPress = (evt) => {
    window.util.isEscEvent(evt, closeModal);
  };

  let showModalError = (text) => {
    mainElement.appendChild(errorModalTemplate);
    errorModalTemplate.querySelector(`.error__title`).textContent = text;
    errorModalTemplate.querySelector(`.error__button`).addEventListener(`click`, () => {
      closeModal();
    });
    errorModalTemplate.addEventListener(`click`, onDocumentClick);
    document.addEventListener(`keydown`, onModalEscPress);
  };

  window.error = {
    show: showModalError,
    closeModal: closeModal
  };

})();