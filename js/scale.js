'use strict';

(function () {

  let ScaleValue = {
    MIN: 25,
    STEP: 25,
    MAX: 100,
    DEFAULT: 100
  };

  let uploadElement = document.querySelector('.img-upload');
  let scaleElement = uploadElement.querySelector('.img-upload__scale');
  let scaleValueElement = scaleElement.querySelector('.scale__control--value');
  let scaleSmallerElement = scaleElement.querySelector('.scale__control--smaller');
  let scaleBiggerElement = scaleElement.querySelector('.scale__control--bigger');
  let imgPreviewWrapperElement = uploadElement.querySelector('.img-upload__preview');

  function setPhotoScale(value) {
    let currentScale = parseInt(scaleValueElement.value, 10);
    currentScale += ScaleValue.STEP * value;
    if (currentScale >= ScaleValue.MIN && currentScale <= ScaleValue.MAX) {
      scaleValueElement.value = `${currentScale}%`;
      currentScale = currentScale / 100;
      imgPreviewWrapperElement.style.transform = `scale(${currentScale})`;
    }
    return currentScale;
  }

  scaleSmallerElement.addEventListener('click', function () {
    setPhotoScale(-1);
  });

  scaleBiggerElement.addEventListener('click', function () {
    setPhotoScale(1);
  });

})();