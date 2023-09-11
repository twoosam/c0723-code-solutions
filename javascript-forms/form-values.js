const $contact = document.querySelector('#contact-form');
function callback(event) {
  event.preventDefault();
  const name = $contact.elements.name.value;
  const email = $contact.elements.email.value;
  const message = $contact.elements.message.value;
  const formObj = {
    name,
    email,
    message,
  };
  console.log('formObj:', formObj);
  $contact.reset();
}
$contact.addEventListener('submit', callback);
