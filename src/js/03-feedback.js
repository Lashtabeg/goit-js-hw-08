import throttle from 'lodash.throttle';

const LOCAL_KEY = `feedback-form-state`;
const form = document.querySelector(`.feedback-form`);
let saveData = {};

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSub);

function onInputData(e) {
  const { name, value } = e.target;
  saveData[name] = value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(saveData));
}

function onFormSub(ev) {
  ev.preventDefault();
  console.log(saveData);
  saveData = {};
  localStorage.removeItem(LOCAL_KEY);
  ev.currentTarget.reset();
}

function onLoad() {
  try {
    const data = localStorage.getItem(LOCAL_KEY);
    if (!data) return;
    saveData = JSON.parse(data);
    Object.entries(saveData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener('load', onLoad);
