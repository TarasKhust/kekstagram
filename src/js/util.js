'use strict';

(() => {
  window.util = {
    getRandomNumber: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
		getRandomElement: element => {
      return element[Math.floor(Math.random() * element.length)];
    },
    KeyCode: {
      ENTER: 13,
      ESC: 27
    },
    isEscEvent: (evt, action) => {
      if (evt.keyCode === window.util.KeyCode.ESC) {
        action();
      }
    },
    isEnterEvent: (evt, action) => {
      if (evt.keyCode === window.util.KeyCode.ENTER) {
        action();
      }
    },
  };

})();
