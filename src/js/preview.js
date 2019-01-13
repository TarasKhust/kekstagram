'use strict';

(() => {

  const DISPLAY_COMMENTS = 5;

  const Avatar = {
    MIN: 1,
    MAX: 6
  };

  const bigPicture = document.querySelector(`.big-picture`);
  const socialLoader = document.querySelector(`.comments-loader`);
  const commentsCount = document.querySelector(`.social__comment-count`);
  socialLoader.classList.add(`visually-hidden`);
  commentsCount.classList.add(`visually-hidden`);
  const commentTemplate = document.querySelector(`#comment`).
      content.
      querySelector(`.social__comment`);

  const createComment = (comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentSrc = window.util.getRandomNumber(Avatar.MIN, Avatar.MAX);
    commentElement.querySelector(`.social__picture`).src = `img/avatar-${commentSrc}.svg`;
    commentElement.querySelector(`.social__text`).textContent = comment;
    return commentElement;
  };

  const renderComments = (comments) => {
    const commentsList = bigPicture.querySelector(`.social__comments`);
    const fragment = document.createDocumentFragment();
    comments.forEach((value, index) => {
      const comment = createComment(value);
      if (index >= DISPLAY_COMMENTS) {
        comment.classList.add(`visually-hidden`);
      }
      fragment.appendChild(comment);
    });
    commentsList.appendChild(fragment);
  };

  const renderBigPicture = (photo) => {
    bigPicture.querySelector(`.big-picture__img img`).src = photo.url;
    bigPicture.querySelector(`.likes-count`).textContent = photo.likes;
    bigPicture.querySelector(`.comments-count`).textContent = photo.comments.length;
    bigPicture.querySelector(`.social__caption`).textContent = photo.description;
    renderComments(photo.comments);
  };

  window.preview = {
    renderBigPicture: renderBigPicture
  };

})();
