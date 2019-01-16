'use strict';
(() => {
  const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];

  const uploadAvatar = document.querySelector(
      `.img-upload__start input[type=file]`),
      preview = document.querySelector(`.img-upload__preview img`);

  const avatarUpload = () => {
    const file = uploadAvatar.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches){
      const reader = new FileReader();
      reader.addEventListener(`load`, () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  uploadAvatar.addEventListener(`change`, avatarUpload);

})();