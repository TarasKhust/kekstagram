'use strict';

(() => {

  const mainElement = document.querySelector(`main`),
      errorModalTemplate = document.querySelector(`#error`).content.querySelector(`.error`);

  const onDocumentClick = (evt) => {
    if (evt.target.tagName === `SECTION`) {
      closeModal();
    }
  };

  const closeModal = (remove) => {
    mainElement.removeChild(remove);
    document.removeEventListener(`keydown`, onModalEscPress);
    document.removeEventListener(`click`, onDocumentClick);
  };

  const onModalEscPress = (evt) => window.util.isEscEvent(evt, closeModal);

  const showModalError = (text) => {
    mainElement.appendChild(errorModalTemplate);
    errorModalTemplate.querySelector(`.error__title`).textContent = text;
    errorModalTemplate.querySelector(`.error__button`).
        addEventListener(`click`, () => closeModal());
    errorModalTemplate.addEventListener(`click`, onDocumentClick);
    document.addEventListener(`keydown`, onModalEscPress);
  };

  window.error = {
    show: showModalError,
    closeModal: closeModal
  };

})();