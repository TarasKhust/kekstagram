'use strict';

let data = {
  COUNT: 25,
  ARRAY_COMMENTS: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда' +
  ' вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
  DESCRIPTION_DATA: ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все' +
  ' сомненья. Не обижайте всех словами......',
  'Вот это тачка!']
};

let template = document.querySelector('#picture').content,
  picture = document.querySelector('.pictures'),
  galleryPicture = document.querySelector('.big-picture'),
  socialTemplate = document.querySelector('#comment-template').content,
  socialComments = document.querySelector('.social__comments');

// Генерация правельного масива с данными для шаблона
function GenerateDescription() {
  let description = [];
  for (let i = 1; i <= data.COUNT; i++) {
    description.push({
      url: `photos/${i}.jpg`,
      likes: getRandomInt(15, 255),
      comments: getRandomElement(data.ARRAY_COMMENTS),
      description: getRandomDescription(data.DESCRIPTION_DATA)
    })
  }
  return description;
}
// Клонируем шаблон
function renderTemplate() {
  let pictureData = GenerateDescription();
  let fragment = document.createDocumentFragment();

  pictureData.forEach((value, index, array) => {
    fragment.appendChild(renderPicture(value, index, array));
  });

  picture.appendChild(fragment);
}
renderTemplate();
// Генерируем шаблон
function renderPicture(value, index, array) {
  let pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__comments').textContent = value.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = value.likes;
  pictureElement.querySelector('img').src = value.url;
  return pictureElement;
}
// Галерея
function gallery(array) {
  let value;
  array.forEach((item) => {
    value = item;
  });
  galleryPicture.querySelector('.big-picture__img').src = value.url;
  galleryPicture.querySelector('.likes-count').textContent = value.likes;
  galleryPicture.querySelector('.comments-count').textContent = value.comments.length;
}
gallery(GenerateDescription());
// Функция, возвращающая случайный лайк
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Функция возвращает случайный коментарий
function getRandomElement(array) {
  let randomIndex;
  let randomElement;
  array.forEach((value, index, array) => {
    randomIndex = Math.floor(Math.random() * index);
    randomElement = array[randomIndex];
  });
  return randomElement
}
// Функция возвращает случайный описание
function getRandomDescription(array) {
  let randomIndex;
  let randomElement;
  array.forEach((value, index, array) => {
    randomIndex = Math.floor(Math.random() * index);
    randomElement = array[randomIndex];
  });
  return randomElement
}

// шаблон коментария
function creatingANewBlock(value) {
  let cloneNode = socialTemplate.cloneNode(true);
  let description = document.querySelector('.social__caption');
  description.textContent = value.description;
  cloneNode.querySelector('.social__picture').src = `img/avatar-${getRandomInt(1,6)}.svg`;
  cloneNode.querySelector('.social__text').textContent = value.comments;
  return cloneNode;
}
// Функция создания шаблона коментария
function renderTemplateComments() {
  let pictureData = GenerateDescription();
  let fragment = document.createDocumentFragment();

  for (let i = 1; i <= 2; i++) {
    let value = pictureData[i];
    fragment.appendChild(creatingANewBlock(value));
  }

  socialComments.appendChild(fragment);
}
renderTemplateComments();

function hideClass () {
  let socialComment = document.querySelector('.social__comment-count');
  let socialLoad = document.querySelector('.social__comments-loader');
  socialComment.classList.add('visually-hidden');
  socialLoad.classList.add('visually-hidden');
}
hideClass();