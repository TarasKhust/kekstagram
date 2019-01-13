'use strict';

(() => {

  const DESCRIPTIONS = [
    `Тестим новую камеру!`,
    `Затусили с друзьями на море`,
    `Как же круто тут кормят`,
    `Отдыхаем...`,
    `Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......`, `Вот это тачка!`];

  const COMMENTS = [
    `Всё отлично!`, `В целом всё неплохо. Но не всё.`,
    `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
    `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
    `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
    `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];

  const PHOTOS_COUNT = 25;

  const Like = {
    MIN: 15,
    MAX: 200
  };

  const getRandomComment = () => {
    let comment = window.util.getRandomElement(COMMENTS);
    if (Math.random() >= 0.5) {
      comment += ` ${window.util.getRandomElement(COMMENTS)}`;
    }
    return comment;
  };

  const getComments = () => {
    const comments = [];
    for (let i = 0; i < window.util.getRandomNumber(1, 10); i++) {
      comments[i] = getRandomComment();
    }
    return comments;
  };

  window.data = {
    generatePhotos: () => {
      const photos = [];
      for (let i = 1; i <= PHOTOS_COUNT; i++) {
        photos[i] = {
          url: `photos/${i}.jpg`,
          likes: window.util.getRandomNumber(Like.MIN, Like.MAX),
          comments: getComments(),
          description: window.util.getRandomElement(DESCRIPTIONS)
        };
      }
      return photos;
    }
  };

})();
