'use strict';
(() => {
  let FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  let uploadAvatar = document.querySelector('.img-upload__start' +
      ' input[type=file]');
  let preview = document.querySelector('.img-upload__preview img');

  let avatarUpload = () => {
    let file = uploadAvatar.files[0];
    let fileName = file.name.toLowerCase();

    let matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });
    if (matches){
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  uploadAvatar.addEventListener('change', avatarUpload);

})();