'use strict';

let DescripthionDate = {
  COUNT: 25,
  ARRAY_COMMENTS: ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда' +
  ' вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'],
  DESCRIPTION_DATA: ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все' +
  ' сомненья. Не обижайте всех словами......',
  'Вот это тачка!']
};

let template = document.querySelector('#picture').content;
let picture = template.querySelector('.picture');
let galleryPicture = document.querySelector('.big-picture');
let socialComents = document.querySelector('.social__comments');

// Генерация правельного масива с данными для шаблона
function GenerateDescription() {
  let description = [];
  for (let i = 1; i <= DescripthionDate.COUNT; i++) {
    description.push({
      url: `photos/${i}.jpg`,
      likes: getRandomInt(15, 255),
      comments: getRandomElement(DescripthionDate.ARRAY_COMMENTS),
      description: getRandomDescription(DescripthionDate.DESCRIPTION_DATA)
    })
  }
  return description;
}
// Клонируем шаблон
function renderTemplate() {
  let pictureData = GenerateDescription();
  let fragment = document.createDocumentFragment();

  pictureData.forEach((value, index, array) => {
    fragment.appendChild(renderPicture(value))
  });

  picture.appendChild(fragment);
}
renderTemplate();
// Генерируем шаблон
function renderPicture(value) {
  let pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__comments').textContent = value.comments;
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
  galleryPicture.classList.remove('hidden');
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

// Функция создание класса под коментариямы
function creatingANewBlock(array) {
  let value;
  array.forEach((item) => {
    value = item;
  });
  let socialCaption = document.querySelector('.social__caption');
  let fragment = document.createDocumentFragment();
  let liClass = document.createElement('li');
  let imgClass = document.createElement('img');
  let pClass = document.createElement('p');
  socialCaption.textContent = value.description;
  pClass.classList.add('social__text');
  pClass.textContent = value.comments;
  liClass.classList.add('social__comment', 'social__comment--text');
  imgClass.classList.add('social__picture');
  imgClass.src = `img/avatar-${getRandomInt(1,6)}.svg`;
  imgClass.width = 35;
  imgClass.height = 35;
  fragment.appendChild(liClass);
  fragment.appendChild(imgClass);
  fragment.appendChild(pClass);
  socialComents.appendChild(fragment);



}
creatingANewBlock(GenerateDescription());