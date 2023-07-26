function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}
const $focus = document.querySelector('#user-name');
$focus.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}
const $blur = document.querySelector('#user-name');
$blur.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('value of name:', event.target.value);
}
const $input = document.querySelector('#user-name');
$input.addEventListener('input', handleInput);

function handleFocusEmail(event) {
  console.log('focus event fired');
  console.log('event.target.email', event.target.name);
}
const $focusEmail = document.querySelector('#user-email');
$focusEmail.addEventListener('focus', handleFocusEmail);

function handleBlurEmail(event) {
  console.log('blur event fired');
  console.log('event.target.email', event.target.name);
}
const $blurEmail = document.querySelector('#user-email');
$blurEmail.addEventListener('blur', handleBlurEmail);

function handleInputEmail(event) {
  console.log('value of email:', event.target.value);
}
const $inputEmail = document.querySelector('#user-email');
$inputEmail.addEventListener('input', handleInputEmail);

function handleFocusMessage(event) {
  console.log('focus event fired');
  console.log('event.target.message', event.target.name);
}
const $focusMessage = document.querySelector('textarea');
$focusMessage.addEventListener('focus', handleFocusMessage);

function handleBlurMessage(event) {
  console.log('blur event fired');
  console.log('event.target.message', event.target.name);
}
const $blurMessage = document.querySelector('textarea');
$blurMessage.addEventListener('blur', handleBlurMessage);

function handleInputMessage(event) {
  console.log('value of message:', event.target.value);
}
const $inputMessage = document.querySelector('textarea');
$inputMessage.addEventListener('input', handleInputMessage);
