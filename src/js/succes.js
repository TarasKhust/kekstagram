'use strict';

(() => {

  const mainElement = document.querySelector(`main`),
      successModalTemplate = document.querySelector(`#success`).content.querySelector(`.success`);

	const onDocumentClick = evt => {
    if (evt.target.tagName === `SECTION`) {
      window.error.closeModal();
    }
  };

	const onModalEscPress = evt =>
      window.util.isEscEvent(evt,
          window.error.closeModal(successModalTemplate));

  const showModalSucces = () => {
    document.addEventListener(`keydown`, onModalEscPress);
    mainElement.appendChild(successModalTemplate);
    successModalTemplate.querySelector(`.success__button`).addEventListener(`click`, () => {
      window.error.closeModal(successModalTemplate);
    });
    successModalTemplate.addEventListener(`click`, onDocumentClick);
  };

  window.success = {
    show: showModalSucces
  };

})();