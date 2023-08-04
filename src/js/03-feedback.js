const form = document.getElementsByClassName(`feedback-form`);
const subBtn = document.getElementsByTagName(`button`);

form.addEventListener('input', onInput);

subBtn.addEventListener('click', handleClick);

function handleClick(event) {
  preventDefault();
}
