let clickNum = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
function increment() {
  clickNum = clickNum + 1;
  $clickCount.textContent = 'Clicks: ' + clickNum;
  if (clickNum < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickNum < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickNum < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickNum < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickNum < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
$hotButton.addEventListener('click', increment);
