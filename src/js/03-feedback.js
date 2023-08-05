import throttle from 'lodash.throttle';

const LOCAL_KEY = `feedback-form-state`;
const form = document.querySelector(`.feedback-form`);
const getText = JSON.parse(localStorage.getItem(LOCAL_KEY));

if (getText) {
  form.email.value = getText.email;
  form.message.value = getText.message;
}

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSub);

function onInputData() {
  const saveData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(saveData));
}

function onFormSub(ev) {
  ev.preventDefault();
  const setData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(setData);
  localStorage.removeItem(LOCAL_KEY);
  ev.currentTarget.reset();
}
