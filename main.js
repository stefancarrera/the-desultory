const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $panel = document.getElementById('panel');
let $panelNum = 1;

$next.addEventListener('click', () => {
  console.log('I hit next, bitch');
  if ($panelNum === 7) {
    $panelNum = 1;
    changePanel();
  } else if (($panelNum >= 1) && ($panelNum < 7)) {
    $panelNum++;
    changePanel();
  }
  console.log('And the panel number is', $panelNum);
});

$prev.addEventListener('click', () => {
  console.log('I hit prev, hctib');
  $panelNum--;
  console.log('And the panel number is', $panelNum);
})

function changePanel() {
  $panel.setAttribute('src', `images/${$panelNum}.png`);
}
