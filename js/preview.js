`use strict`;

(() => {

  let DISPLAY_COMMENTS = 5;

  let Avatar = {
    MIN: 1,
    MAX: 6
  };

  let bigPicture = document.querySelector(`.big-picture`);
  let socialLoader = document.querySelector(`.comments-loader`);
  let commentsCount = document.querySelector(`.social__comment-count`);
  socialLoader.classList.add(`visually-hidden`);
  commentsCount.classList.add(`visually-hidden`);
  let commentTemplate = document.querySelector(`#comment`).content.querySelector(`.social__comment`);

  let createComment = (comment) => {
    let commentElement = commentTemplate.cloneNode(true);
    let commentSrc = window.util.getRandomNumber(Avatar.MIN, Avatar.MAX);
    commentElement.querySelector(`.social__picture`).src = `img/avatar-${commentSrc}.svg`;
    commentElement.querySelector(`.social__text`).textContent = comment;
    return commentElement;
  };

  let renderComments = (comments) => {
    let commentsList = bigPicture.querySelector(`.social__comments`);
    let fragment = document.createDocumentFragment();
    comments.forEach((value, index) => {
      let comment = createComment(value);
      if (index >= DISPLAY_COMMENTS) {
        comment.classList.add(`visually-hidden`);
      }
      fragment.appendChild(comment);
    });
    commentsList.appendChild(fragment);
  };

  let renderBigPicture = (photo) => {
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
