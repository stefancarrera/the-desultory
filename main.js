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

  if ($panelNum === 6) {
    $panel.className = "panel fade-in"
    $panel.setAttribute('src', `images/${$panelNum}.png`);

    setTimeout(() => {
      $panel.className = "panel flicker-4"
    },
      2000
    );

    // $panel.classList.add("flicker-1");
  } else if ($panelNum === 1) {
    $panel.classList.add("fade-in");
    $panel.setAttribute('src', `images/${$panelNum}.png`);
  } else {
    $panel.setAttribute('src', `images/${$panelNum}.png`);
  }

}
