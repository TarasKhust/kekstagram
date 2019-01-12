'use strict';

(() => {

  let DEFAULT_EFFECT = `none`;

  let EffectParameter = {
    chrome: {
      CLASS: `effects__preview--chrome`,
      PROPERTY: `grayscale`,
      MIN_VALUE: 0,
      MAX_VALUE: 1,
      UNIT: ``
    },
    sepia: {
      CLASS: `effects__preview--sepia`,
      PROPERTY: `sepia`,
      MIN_VALUE: 0,
      MAX_VALUE: 1,
      UNIT: ``
    },
    marvin: {
      CLASS: `effects__preview--marvin`,
      PROPERTY: `invert`,
      MIN_VALUE: 0,
      MAX_VALUE: 100,
      UNIT: `%`
    },
    phobos: {
      CLASS: `effects__preview--phobos`,
      PROPERTY: `blur`,
      MIN_VALUE: 0,
      MAX_VALUE: 3,
      UNIT: `px`
    },
    heat: {
      CLASS: `effects__preview--heat`,
      PROPERTY: `brightness`,
      MIN_VALUE: 1,
      MAX_VALUE: 3,
      UNIT: ``
    }
  };

  let EffectValue = {
    MAX: 100,
    DEFAULT: 100,
  };

  let PinValue = {
    MIN: 0,
    MAX: 100
  };

  let uploadElement = document.querySelector(`.img-upload`),
      imgPreviewWrapperElement = uploadElement.querySelector(`.img-upload__preview`),
      imgPreviewElement = imgPreviewWrapperElement.querySelector(`.img-upload__preview img`),
      effectLevelElement = uploadElement.querySelector(`.effect-level`),
      effectsListElement = uploadElement.querySelector(`.effects__list`),
      effectPinElement = effectLevelElement.querySelector(`.effect-level__pin`),
      effectDepthElement = effectLevelElement.querySelector(`.effect-level__depth`),
      effectLevelValueElement = effectLevelElement.querySelector(`.effect-level__value`),
      currentEffectName = effectsListElement.querySelector(`.effects__radio:checked`),
      effectLevelLineElement = effectLevelElement.querySelector(`.effect-level__line`);

  let applyEffect = (value) => {
    if (currentEffectName === DEFAULT_EFFECT) {
      imgPreviewElement.style.filter = ``;
    } else {
      imgPreviewElement.style.filter = `${EffectParameter[currentEffectName].PROPERTY}(${getFilterValue(currentEffectName, value)})`;
    }
    setPinPosition(value);
  };

  let setPinPosition = (value) => {
    effectPinElement.style.left = `${value}%`;
    effectLevelValueElement.value = Math.round(value);
    effectDepthElement.style.width = effectPinElement.style.left;
  };

  let onImageEffectClick = (evt) => {
    let target = evt.target;
    if (target.tagName !== `INPUT`) {
      return;
    }
    imgPreviewElement.classList = ``;
    currentEffectName = target.value;
    imgPreviewElement.classList.add(`effects__preview--${currentEffectName}`);
    imgPreviewElement.style.filter = ``;

    if (currentEffectName === DEFAULT_EFFECT) {
      effectLevelElement.classList.add(`hidden`);
    } else {
      effectLevelElement.classList.remove(`hidden`);
    }
    effectLevelValueElement.value = EffectValue.DEFAULT;
    applyEffect(EffectValue.DEFAULT);
    setPinPosition();
  };

  let getFilterValue = (effect, value) => {
    return value * (EffectParameter[effect].MAX_VALUE - EffectParameter[effect].MIN_VALUE) / EffectValue.MAX + EffectParameter[effect].MIN_VALUE + EffectParameter[effect].UNIT;
  };

  let onMouseDown = (evt) => {
    let startCoordX = evt.clientX;
    let sliderEffectLineRect = effectLevelLineElement.getBoundingClientRect();
    let clickedPosition = (startCoordX - sliderEffectLineRect.left) / sliderEffectLineRect.width * 100;

    setPinPosition(clickedPosition);
    applyEffect(clickedPosition);

    let onMouseMove = (moveEvt) => {
      let shiftX = startCoordX - moveEvt.clientX;
      startCoordX = moveEvt.clientX;
      let movePosition = (effectPinElement.offsetLeft - shiftX) / sliderEffectLineRect.width * 100;

      if (movePosition <= PinValue.MIN) {
        movePosition = PinValue.MIN;
        effectLevelValueElement.value = PinValue.MIN;
      } else if (movePosition >= PinValue.MAX) {
        movePosition = PinValue.MAX;
        effectLevelValueElement.value = PinValue.MAX;
      }
      applyEffect(movePosition);
    };

    let onMouseUp = (upEvt) => {
      upEvt.preventDefault();
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mousemove`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  };

  effectsListElement.addEventListener(`click`, onImageEffectClick);
  effectLevelLineElement.addEventListener(`mousedown`, onMouseDown);

  window.effects = {
    PinValue: PinValue
  };
})();
