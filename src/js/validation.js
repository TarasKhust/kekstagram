'use strict';

(() => {

  const Hashtag = {
    QUANITY: 5,
    HASH_SYMBOL: `#`,
    MAX_LENGTH: 20
  };

  const uploadElement = document.querySelector(`.img-upload`),
      hashtagElement = document.querySelector(`.text__hashtags`),
      uploadSubmitElement = uploadElement.querySelector(`.img-upload__submit`);

	const checkRepeatHashtags = hashtags => {
    for (let i = 0; i < hashtags.length; i++) {
      const currentHashtag = hashtags[i];
      for (let j = 0; j < hashtags.length; j++) {
        if (currentHashtag === hashtags[j] && i !== j) {
          return true;
        }
      }
    }
    return false;
  };

  const hashtagValidity = () => {
    hashtagElement.style.outline = ``;
    let errorMessage = ``;
    const hashtagValue = hashtagElement.value.trim();

    if (hashtagValue === ``) {
      hashtagElement.setCustomValidity(errorMessage);
      return;
    }
    const hashtags = hashtagValue.toLowerCase().split(` `);
		hashtags.forEach(hashtagItem => {
      if (hashtagItem.charAt(0) !== Hashtag.HASH_SYMBOL) {
        errorMessage = `Хэштег должен начинаться с символа #`;
      } else if (hashtagItem.indexOf(Hashtag.HASH_SYMBOL, 1) > 1) {
        errorMessage = `Хэш-теги разделяются пробелами`;
      } else if (hashtagItem.charAt(0) === Hashtag.HASH_SYMBOL && hashtagItem.length === 1) {
        errorMessage = `Хеш-тег не может состоять только из одной решётки`;
      } else if (hashtags.length > Hashtag.QUANITY) {
        errorMessage = `Допустимое количество  хэштегов  не более 5`;
      } else if (hashtagItem.length > Hashtag.MAX_LENGTH) {
        errorMessage = `Максимальная длина одного хэш-тега 20 символов, включая решётку`;
      } else if (checkRepeatHashtags(hashtags)) {
        errorMessage = `Хэштеги не должны повторяться`;
      }
    });

    hashtagElement.setCustomValidity(errorMessage);
  };

  hashtagElement.addEventListener(`input`, hashtagValidity);

  const highlightInvalidField = (field) => {
    if (!field.validity.valid) {
      field.style.outline = `2px solid red`;
    } else {
      field.style.outline = `none`;
    }
  };

  uploadSubmitElement.addEventListener(`click`, () => {
    highlightInvalidField(hashtagElement);
  });

  uploadSubmitElement.addEventListener(`submit`, () => {
    highlightInvalidField(hashtagElement);
  });

})();
