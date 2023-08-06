import throttle from 'lodash.throttle';

const LOCAL_KEY = `feedback-form-state`;
const form = document.querySelector(`.feedback-form`);
// const getText = JSON.parse(localStorage.getItem(LOCAL_KEY));

// if (getText) {
//   form.email.value = getText.email;
//   form.message.value = getText.message;
// }

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSub);

let saveData = {};

function onInputData(e) {
  const { name, value } = e.target;
  saveData[name] = value.trim();

  // const saveData = {
  //   email: form.email.value,
  //   message: form.message.value,
  // };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(saveData));
}

function onFormSub(ev) {
  ev.preventDefault();
  // const setData = JSON.parse(localStorage.getItem('feedback-form-state'));
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
    }); //[[key, value], [key, value]]
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener('load', onLoad);

// const user = {
//   name: 'Poly',
//   age: 25,
// };
// const key = 'age';
// console.log(user.name);
// console.log(user[key]);
