!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";!function(){var e=document.querySelector("main"),t=document.querySelector("#success").content.querySelector(".success"),n=function(e){"SECTION"===e.target.tagName&&window.error.closeModal()},o=function(e){window.util.isEscEvent(e,window.error.closeModal(t))};window.success={show:function(){document.addEventListener("keydown",o),e.appendChild(t),t.querySelector(".success__button").addEventListener("click",function(){window.error.closeModal(t)}),t.addEventListener("click",n)}}}()},function(e,t,n){"use strict";!function(){var e=document.querySelector("main"),t=document.querySelector("#error").content.querySelector(".error"),n=function(e){"SECTION"===e.target.tagName&&o()},o=function(t){e.removeChild(t),document.removeEventListener("keydown",r),document.removeEventListener("click",n)},r=function(e){window.util.isEscEvent(e,o)};window.error={show:function(i){e.appendChild(t),t.querySelector(".error__title").textContent=i,t.querySelector(".error__button").addEventListener("click",function(){o()}),t.addEventListener("click",n),document.addEventListener("keydown",r)},closeModal:o}}()},function(e,t,n){"use strict";!function(){var e=document.querySelector(".big-picture");e.querySelector(".big-picture__cancel").addEventListener("click",function(){t()});var t=function(){e.classList.add("hidden")},n=function(e){window.util.isEscEvent(e,t)};window.picture={openPhoto:function(){e.classList.remove("hidden"),e.querySelector(".social__comments").innerHTML="",document.addEventListener("keydown",n)}}}()},function(e,t,n){"use strict";!function(){var e={chrome:{CLASS:"effects__preview--chrome",PROPERTY:"grayscale",MIN_VALUE:0,MAX_VALUE:1,UNIT:""},sepia:{CLASS:"effects__preview--sepia",PROPERTY:"sepia",MIN_VALUE:0,MAX_VALUE:1,UNIT:""},marvin:{CLASS:"effects__preview--marvin",PROPERTY:"invert",MIN_VALUE:0,MAX_VALUE:100,UNIT:"%"},phobos:{CLASS:"effects__preview--phobos",PROPERTY:"blur",MIN_VALUE:0,MAX_VALUE:3,UNIT:"px"},heat:{CLASS:"effects__preview--heat",PROPERTY:"brightness",MIN_VALUE:1,MAX_VALUE:3,UNIT:""}},t=100,n=100,o={MIN:0,MAX:100},r=document.querySelector(".img-upload"),i=r.querySelector(".img-upload__preview").querySelector(".img-upload__preview img"),c=r.querySelector(".effect-level"),u=r.querySelector(".effects__list"),a=c.querySelector(".effect-level__pin"),l=c.querySelector(".effect-level__depth"),s=c.querySelector(".effect-level__value"),d=u.querySelector(".effects__radio:checked"),f=c.querySelector(".effect-level__line"),m=function(t){i.style.filter="none"===d?"":e[d].PROPERTY+"("+w(d,t)+")",v(t)},v=function(e){a.style.left=e+"%",s.value=Math.round(e),l.style.width=a.style.left},w=function(n,o){return o*(e[n].MAX_VALUE-e[n].MIN_VALUE)/t+e[n].MIN_VALUE+e[n].UNIT};u.addEventListener("click",function(e){var t=e.target;"INPUT"===t.tagName&&(i.classList="",d=t.value,i.classList.add("effects__preview--"+d),i.style.filter="","none"===d?c.classList.add("hidden"):c.classList.remove("hidden"),s.value=n,m(n),v())}),f.addEventListener("mousedown",function(e){var t=e.clientX,n=f.getBoundingClientRect(),r=(t-n.left)/n.width*100;v(r),m(r);var i=function(e){var r=t-e.clientX;t=e.clientX;var i=(a.offsetLeft-r)/n.width*100;i<=o.MIN?(i=o.MIN,s.value=o.MIN):i>=o.MAX&&(i=o.MAX,s.value=o.MAX),m(i)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",function e(t){t.preventDefault(),document.removeEventListener("mousemove",i),document.removeEventListener("mousemove",e)})}),window.effects={PinValue:o}}()},function(e,t,n){"use strict";!function(){var e=25,t=25,n=100,o=document.querySelector(".img-upload"),r=o.querySelector(".img-upload__scale"),i=r.querySelector(".scale__control--value"),c=r.querySelector(".scale__control--smaller"),u=r.querySelector(".scale__control--bigger"),a=o.querySelector(".img-upload__preview"),l=function(o){var r=parseInt(i.value,10);return(r+=t*o)>=e&&r<=n&&(i.value=r+"%",r/=100,a.style.transform="scale("+r+")"),r};c.addEventListener("click",function(){l(-1)}),u.addEventListener("click",function(){l(1)})}()},function(e,t,n){"use strict";!function(){var e=5,t="#",n=20,o=document.querySelector(".img-upload"),r=document.querySelector(".text__hashtags"),i=o.querySelector(".img-upload__submit");r.addEventListener("input",function(){r.style.outline="";var o="",i=r.value.trim();if(""!==i){var c=i.toLowerCase().split(" ");c.forEach(function(r){r.charAt(0)!==t?o="Хэштег должен начинаться с символа #":r.indexOf(t,1)>1?o="Хэш-теги разделяются пробелами":r.charAt(0)===t&&1===r.length?o="Хеш-тег не может состоять только из одной решётки":c.length>e?o="Допустимое количество  хэштегов  не более 5":r.length>n?o="Максимальная длина одного хэш-тега 20 символов, включая решётку":function(e){for(var t=0;t<e.length;t++)for(var n=e[t],o=0;o<e.length;o++)if(n===e[o]&&t!==o)return!0;return!1}(c)&&(o="Хэштеги не должны повторяться")}),r.setCustomValidity(o)}else r.setCustomValidity(o)});var c=function(e){e.validity.valid?e.style.outline="none":e.style.outline="2px solid red"};i.addEventListener("click",function(){c(r)}),i.addEventListener("submit",function(){c(r)})}()},function(e,t,n){"use strict";!function(){var e=["gif","jpg","jpeg","png"],t=document.querySelector(".img-upload__start input[type=file]"),n=document.querySelector(".img-upload__preview img");t.addEventListener("change",function(){var o=t.files[0],r=o.name.toLowerCase();if(e.some(function(e){return r.endsWith(e)})){var i=new FileReader;i.addEventListener("load",function(){n.src=i.result}),i.readAsDataURL(o)}})}()},function(e,t,n){"use strict";!function(){var e=document.querySelector(".img-upload__form"),t=document.querySelector(".img-upload"),n=t.querySelector("#upload-file"),o=t.querySelector(".img-upload__submit"),r=t.querySelector(".img-upload__overlay"),i=t.querySelector("#upload-cancel"),c=document.querySelector(".text__hashtags"),u=document.querySelector(".text__description"),a=function(){r.classList.add("hidden"),n.value=null,document.removeEventListener("keydown",l)},l=function(e){window.util.isEscEvent(e,a)};document.querySelector("#upload-select-image").addEventListener("change",function(){r.classList.remove("hidden"),o.disabled=!1,document.addEventListener("keydown",l)}),i.addEventListener("click",function(){a()}),c.addEventListener("focusin",function(){document.removeEventListener("keydown",l)}),c.addEventListener("focusout",function(){document.addEventListener("keydown",l)}),u.addEventListener("focusin",function(){document.removeEventListener("keydown",l)}),u.addEventListener("focusout",function(){document.addEventListener("keydown",l)});var s=function(e){a(),window.error.show(e)},d=function(){a(),window.success.show()};e.addEventListener("submit",function(t){window.backend.upload(new FormData(e),d,s),o.disabled=!0,t.preventDefault()})}()},function(e,t,n){"use strict";!function(){var e=1,t=6,n=document.querySelector(".big-picture"),o=document.querySelector(".comments-loader"),r=document.querySelector(".social__comment-count");o.classList.add("visually-hidden"),r.classList.add("visually-hidden");var i=document.querySelector("#comment").content.querySelector(".social__comment"),c=function(o){var r=n.querySelector(".social__comments"),c=document.createDocumentFragment();o.forEach(function(n,o){var r=function(n){var o=i.cloneNode(!0),r=window.util.getRandomNumber(e,t);return o.querySelector(".social__picture").src="img/avatar-"+r+".svg",o.querySelector(".social__text").textContent=n,o}(n);o>=5&&r.classList.add("visually-hidden"),c.appendChild(r)}),r.appendChild(c)};window.preview={renderBigPicture:function(e){n.querySelector(".big-picture__img img").src=e.url,n.querySelector(".likes-count").textContent=e.likes,n.querySelector(".comments-count").textContent=e.comments.length,n.querySelector(".social__caption").textContent=e.description,c(e.comments)}}}()},function(e,t,n){"use strict";!function(){var e=void 0,t=document.querySelector(".img-filters"),n=t.querySelector("#filter-popular"),o=t.querySelector("#filter-new"),r=t.querySelector("#filter-discussed"),i=function(e){var n=t.querySelector(".img-filters__button--active");n&&n.classList.remove("img-filters__button--active"),e.classList.add("img-filters__button--active")},c=function(){document.querySelectorAll(".picture").forEach(function(e){e.remove()})},u=function(t){e&&clearTimeout(e),e=setTimeout(function(){c(),window.gallery.renderPhoto(t)},500)};n.addEventListener("click",function(){i(n),window.filters.currentData=window.gallery.initialData,u(window.filters.currentData)}),o.addEventListener("click",function(){i(o);var t=window.gallery.initialData.slice();e&&clearTimeout(e),e=setTimeout(function(){c(),window.filters.currentData=function(e){for(var t=0;t<e.length;t++){var n=Math.round(Math.random()*(e.length-1)),o=e[t];e[t]=e[n],e[n]=o}return e}(t).splice(0,10),window.gallery.appendPhotos(window.filters.currentData)},500)}),r.addEventListener("click",function(){i(r);var e=window.gallery.initialData.slice();window.filters.currentData=e.sort(function(e,t){return t.comments.length-e.comments.length}),u(window.filters.currentData)}),window.filters={filtersElement:t,currentData:[]}}()},function(e,t,n){"use strict";!function(){var e=document.querySelector("#picture").content.querySelector(".picture"),t=document.querySelector(".pictures"),n=document.querySelector(".img-filters"),o=function(t){var n=e.cloneNode(!0);return n.querySelector(".picture__img").src=t.url,n.querySelector(".picture__likes").textContent=t.likes,n.querySelector(".picture__comments").textContent=t.comments.length,n.addEventListener("click",function(){window.picture.openPhoto(),window.preview.renderBigPicture(t)}),n},r=function(){var e=document.createDocumentFragment();window.data.generatePhotos().forEach(function(t){e.appendChild(o(t))}),t.appendChild(e)};window.gallery={initialData:[],appendPhotos:r,renderPhoto:o};var i=function(e){window.gallery.initialData=e,window.filters.currentData=e,window.filters.filtersElement.classList.remove("img-filters--inactive"),r()};!function(e){window.backend.load(i),e()}(function(){n.classList.remove("img-filters--inactive")})}()},function(e,t,n){"use strict";!function(){var e=["Тестим новую камеру!","Затусили с друзьями на море","Как же круто тут кормят","Отдыхаем...","Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......","Вот это тачка!"],t=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"],n=15,o=200,r=function(){var e=window.util.getRandomElement(t);return Math.random()>=.5&&(e+=" "+window.util.getRandomElement(t)),e},i=function(){for(var e=[],t=0;t<window.util.getRandomNumber(1,10);t++)e[t]=r();return e};window.data={generatePhotos:function(){for(var t=[],r=1;r<=25;r++)t[r]={url:"photos/"+r+".jpg",likes:window.util.getRandomNumber(n,o),comments:i(),description:window.util.getRandomElement(e)};return t}}}()},function(e,t,n){"use strict";!function(){var e="https://js.dump.academy/kekstagram/data",t="https://js.dump.academy/kekstagram/",n=200,o=404,r=500,i=function(e,t){var i=new XMLHttpRequest;return i.responseType="json",i.timeout=1e4,i.addEventListener("load",function(){switch(i.status){case n:e(i.response);break;case r:t("Внутренняя ошибка сервера: "+i.status+" "+i.statusText);break;case o:t("404 Not Found");break;default:t("Статус ответа: "+i.status+" "+i.statusText)}}),i.addEventListener("error",function(){t("Произошла ошибка соединения")}),i.addEventListener("timeout",function(){t("Запрос не успел выполниться за "+i.timeout+"мс")}),i};window.backend={load:function(t,n){var o=i(t,n);o.open("GET",e),o.send()},upload:function(e,n,o){var r=i(n,o);r.open("POST",t),r.send(e)}}}()},function(e,t,n){"use strict";window.util={getRandomNumber:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},getRandomElement:function(e){return e[Math.floor(Math.random()*e.length)]},KeyCode:{ENTER:13,ESC:27},isEscEvent:function(e,t){e.keyCode===window.util.KeyCode.ESC&&t()},isEnterEvent:function(e,t){e.keyCode===window.util.KeyCode.ENTER&&t()}}},function(e,t){},function(e,t){},function(e,t,n){"use strict";n(15),n(14),n(13),n(12),n(11),n(10),n(9),n(8),n(7),n(6),n(5),n(4),n(3),n(2),n(1),n(0)}]);
//# sourceMappingURL=app.bundle.js.map