const btn = document.querySelector('.task-list');
function callback(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target && event.target.tagName === 'BUTTON') {
    const close = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', close);
    close.remove();
  }
}
btn.addEventListener('click', callback);
