let clickNum = 0;
const $buttonClick = document.querySelector('.click-button');
const $background = document.querySelector('.background');
function lightToDark(event) {
  clickNum = clickNum + 1;
  if (clickNum % 2 === 0) {
    $buttonClick.className = 'click-button light';
    $background.className = 'background light';
  } else {
    $buttonClick.className = 'click-button dark';
    $background.className = 'background dark';
  }
}
$buttonClick.addEventListener('click', lightToDark);
