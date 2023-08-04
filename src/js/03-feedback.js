import throttle from 'lodash.throttle';

const LOCAL_KEY = `feedback-form-state`;

let formData = {};

const form = document.querySelector(`.feedback-form`);

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSub);

setInput();

function onInputData(event) {
  const inputName = event.target.name;
  const textMess = event.target.value;
  formData[inputName] = textMess;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function setInput() {
  const getText = JSON.parse(localStorage.getItem(LOCAL_KEY, formData));
  if (getText) {
    form.email.value = getText.email;
    form.message.value = getText.message;
  }
}

function onFormSub(ev) {
  ev.preventDefault();
  ev.target.reset();
  localStorage.removeItem(LOCAL_KEY);
}
