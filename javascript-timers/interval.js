const $h1 = document.querySelector('h1');
let counter = 4;
const interval = setInterval(() => {
  counter--;
  $h1.textContent = counter;
  if (counter < 1) {
    clearInterval(interval);
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
