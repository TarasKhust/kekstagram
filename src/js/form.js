(() => {

  const formElement = document.querySelector(`.img-upload__form`),
     uploadElement = document.querySelector(`.img-upload`),
     uploadFileElement = uploadElement.querySelector(`#upload-file`),
     uploadSendButtonElement = uploadElement.querySelector(`.img-upload__submit`),
     uploadPopupElement = uploadElement.querySelector(`.img-upload__overlay`),
     uploadPopupCloseElement = uploadElement.querySelector(`#upload-cancel`),
     hashtagElement = document.querySelector(`.text__hashtags`),
     descriptionElement = document.querySelector(`.text__description`),
     uploadFormSelectElement = document.querySelector(`#upload-select-image`);

  const openForm = () => {
    uploadPopupElement.classList.remove(`hidden`);
    uploadSendButtonElement.disabled = false;
    document.addEventListener(`keydown`, onFormEscPress);
  };

  const closeForm = () => {
    uploadPopupElement.classList.add(`hidden`);
    uploadFileElement.value = null;
    document.removeEventListener(`keydown`, onFormEscPress);
  };

  const onFormEscPress = (evt) => window.util.isEscEvent(evt, closeForm);

  uploadFormSelectElement.addEventListener(`change`, () => openForm());

  uploadPopupCloseElement.addEventListener(`click`, () => closeForm());

  hashtagElement.addEventListener(`focusin`, () =>
      document.removeEventListener(`keydown`, onFormEscPress));

  hashtagElement.addEventListener(`focusout`, () =>
      document.addEventListener(`keydown`, onFormEscPress));

  descriptionElement.addEventListener(`focusin`, () =>
      document.removeEventListener(`keydown`, onFormEscPress));

  descriptionElement.addEventListener(`focusout`, () =>
      document.addEventListener(`keydown`, onFormEscPress));

  const onError = (errorMessage) => {
    closeForm();
    window.error.show(errorMessage);
  };

  const onSuccess = () => {
    closeForm();
    window.success.show();
  };

  formElement.addEventListener(`submit`, (evt) => {
    window.backend.upload(new FormData(formElement), onSuccess, onError);
    uploadSendButtonElement.disabled = true;
    evt.preventDefault();
  });

})();