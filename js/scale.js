`use strict`;

(() => {

  let ScaleValue = {
    MIN: 25,
    STEP: 25,
    MAX: 100,
    DEFAULT: 100
  };

  let uploadElement = document.querySelector(`.img-upload`),
      scaleElement = uploadElement.querySelector(`.img-upload__scale`),
      scaleValueElement = scaleElement.querySelector(`.scale__control--value`),
      scaleSmallerElement = scaleElement.querySelector(`.scale__control--smaller`),
      scaleBiggerElement = scaleElement.querySelector(`.scale__control--bigger`),
      imgPreviewWrapperElement = uploadElement.querySelector(`.img-upload__preview`);

  let setPhotoScale = (value) => {
    let currentScale = parseInt(scaleValueElement.value, 10);
    currentScale += ScaleValue.STEP * value;
    if (currentScale >= ScaleValue.MIN && currentScale <= ScaleValue.MAX) {
      scaleValueElement.value = `${currentScale}%`;
      currentScale = currentScale / 100;
      imgPreviewWrapperElement.style.transform = `scale(${currentScale})`;
    }
    return currentScale;
  };

  scaleSmallerElement.addEventListener(`click`, setPhotoScale(-1));

  scaleBiggerElement.addEventListener(`click`, setPhotoScale(1));

})();