const $container = document.querySelector('.tab-container');
const $viewNode = document.querySelectorAll('.view');
const $tabNode = document.querySelectorAll('.tab');

function tabs(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabNode.length; i++) {
      if (event.target === $tabNode[i]) {
        $tabNode[i].setAttribute('class', 'tab active');
      } else {
        $tabNode[i].setAttribute('class', 'tab');
      }
    }
    const description = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewNode.length; i++) {
      if (description === $viewNode[i].getAttribute('data-view')) {
        $viewNode[i].setAttribute('class', 'view');
      } else {
        $viewNode[i].setAttribute('class', 'view hidden');
      }
      console.log($viewNode[i]);
    }
  }
}
$container.addEventListener('click', tabs);
