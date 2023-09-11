function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
const $focusName = document.querySelector('#user-name');
$focusName.addEventListener('focus', handleFocus);
const $focusEmail = document.querySelector('#user-email');
$focusEmail.addEventListener('focus', handleFocus);
const $focusInput = document.querySelector('#user-message');
$focusInput.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}
const $blurName = document.querySelector('#user-name');
$blurName.addEventListener('blur', handleBlur);
const $blurEmail = document.querySelector('#user-email');
$blurEmail.addEventListener('blur', handleBlur);
const $blurInput = document.querySelector('#user-message');
$blurInput.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('value of name:', event.target.value);
}
const $inputName = document.querySelector('#user-name');
$inputName.addEventListener('input', handleInput);
const $inputEmail = document.querySelector('#user-email');
$inputEmail.addEventListener('input', handleInput);
const $inputInput = document.querySelector('#user-message');
$inputInput.addEventListener('input', handleInput);
