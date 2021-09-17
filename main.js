const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $panel = document.getElementById('panel');
let $panelNum = 1;

$next.addEventListener('click', () => {
  if ($panelNum === 7) {
    $panelNum = 1;
    changePanel();
  } else if (($panelNum >= 1) && ($panelNum < 7)) {
    $panelNum++;
    changePanel();
  }
});

$prev.addEventListener('click', () => {
  if ($panelNum === 1) {
    $panelNum = 7;
    changePanel();
  } else if (($panelNum <= 7) && ($panelNum > 1)) {
    $panelNum--;
    changePanel();
  }
});

function changePanel() {
  $panel.className = "panel";
  $panel.setAttribute('src', `images/${$panelNum}.png`);
  if ($panelNum === 6) {
    $panel.classList.add("flicker-1");
  }
}
