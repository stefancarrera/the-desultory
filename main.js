const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $panel = document.getElementById('panel');
const $text1 = document.getElementById('text1');
const $text2 = document.getElementById('text2');
const $navRow = document.getElementById('navRow');

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
      $panel.className = "panel flicker"
    },
      2000
    );

  } else if ($panelNum === 1) {
    $panel.classList.add("fade-in");
    $panel.setAttribute('src', `images/${$panelNum}.png`);
  } else {
    $panel.setAttribute('src', `images/${$panelNum}.png`);
  }

}

function text() {
  $text1.setAttribute('src', '');
  $text2.setAttribute('src', '');

  if ($panelNum === 1) {
    setTimeout(() => {
      $text1.setAttribute('src', `images/text/text1-1.png`)
      $text1.className = 'p1Text1 focus-in';
    }, 2000);
    setTimeout(() => {
      $text2.setAttribute('src', 'images/text/text1-2.png')
      $text2.className = 'p1Text2 focus-in';
    }, 3000);
  }

  if ($panelNum === 2) {
    setTimeout(() => {
      $text1.setAttribute('src', `images/text/text2-1.png`)
      $text1.className = 'p1Text1 focus-in';
    }, 2000);
    setTimeout(() => {
      $text2.setAttribute('src', 'images/text/text2-2.png')
      $text2.className = 'p1Text2 focus-in';
    }, 3000);
  }

  if ($panelNum === 3) {
    setTimeout(() => {
      const divText1 = document.createElement('div');
      divText1.className = 'p3Text1 focus-in';
      divText1.textContent = 'Evolving';
      $navRow.appendChild(divText1);
    }, 2000);
    setTimeout(() => {
      const divText2 = document.createElement('div');
      divText2.className = 'p3Text2 focus-in';
      divText2.textContent = `It yearns for what it doesn't have. An innate drive to improve, to become better, stronger. Its ancestor's struggle has brought it here. To this moment.`
      $navRow.appendChild(divText2);
    }, 3000);
  }
}
