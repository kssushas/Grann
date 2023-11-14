import throttle from 'lodash.throttle';
import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.do-form'),
  inputName: document.querySelector('[name="username"]'),
  inputTel: document.querySelector('[name="usertel"]'),
  inputText: document.querySelector('[name="usertext"]'),
};

const KEY_STORAGE = 'feedback-form-state';
const formData = {};
let savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  storageSetItem(formData);
}

function storageSetItem(formData) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

populateTaxtarea();

function populateTaxtarea() {
  if (savedData) {
    if (savedData.username) {
      refs.inputName.value = savedData.username;
    }
    if (savedData.usertext) {
      refs.inputText.value = savedData.usertext;
    }
    if (savedData.usertel) {
      refs.inputTel.value = savedData.usertel;
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  savedData = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if ( !savedData) {
    Notiflix.Notify.failure(
        'Please fill in the phone number and your name fields'
      );
    return;
  }

    if(!savedData.username || !savedData.usertel){
        Notiflix.Notify.failure(
            'Please fill in the phone number and your name fields'
          );
        return;
    }
  

  localStorage.removeItem(KEY_STORAGE);
  refs.form.reset();
  Notiflix.Notify.success("Thank you, we will contact you soon");
}
