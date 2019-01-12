'use strict';

(() => {

  let Url = {
    GET: `https://js.dump.academy/kekstagram/data`,
    POST: `https://js.dump.academy/kekstagram/`
  };

  let TIMEOUT = 10000;

  let Code = {
    OK: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  };

  let createRequest = (onSuccess, onError) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = `json`;
    xhr.timeout = TIMEOUT;
    xhr.addEventListener(`load`, () => {
      switch (xhr.status) {
        case Code.OK:
          onSuccess(xhr.response);
          break;
        case Code.INTERNAL_SERVER_ERROR:
          onError(`Внутренняя ошибка сервера: ${xhr.status} ${xhr.statusText}`);
          break;
        case Code.NOT_FOUND:
          onError(`404 Not Found`);
          break;
        default:
          onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
          break;
      }
    });
    xhr.addEventListener(`error`, () => {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, () => {
      onError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
    });
    return xhr;
  };

  let load = (onLoad, onError) => {
    let xhr = createRequest(onLoad, onError);
    xhr.open(`GET`, Url.GET);
    xhr.send();
  };

  let upload = (data, onLoad, onError) => {
    let xhr = createRequest(onLoad, onError);
    xhr.open(`POST`, Url.POST);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    upload: upload
  };

})();