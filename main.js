const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $panel = document.getElementById('panel');
const $text1 = document.getElementById('text1');
const $text2 = document.getElementById('text2');
// const $navRow = document.getElementById('navRow');

let $panelNum = 1;

window.addEventListener("load", () => {
  changePanel();
  text();
});

$next.addEventListener('click', () => {
  if ($panelNum === 7) {
    $panelNum = 1;
    changePanel();
    text();
  } else if (($panelNum >= 1) && ($panelNum < 7)) {
    $panelNum++;
    changePanel();
    text();
  }
});

$prev.addEventListener('click', () => {
  if ($panelNum === 1) {
    $panelNum = 7;
    changePanel();
    text();
  } else if (($panelNum <= 7) && ($panelNum > 1)) {
    $panelNum--;
    changePanel();
    text();
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
      1000
    );

    // $panel.classList.add("flicker-1");
  } else if ($panelNum === 1) {
    $panel.classList.add("fade-in");
    $panel.setAttribute('src', `images/${$panelNum}.png`);
  } else {
    $panel.setAttribute('src', `images/${$panelNum}.png`);
  }

}

function text() {
  if ($panelNum === 1) {
    setTimeout(() => {
      $text1.setAttribute('src', `images/text/text1-1.png`)
      $text1.className = 'p1Text1 fade-in';
      $text2.setAttribute('src', 'images/text/text1-2.png')
      $text2.className = 'p1Text2 fade-in';
    }, 2000);
  }
}
