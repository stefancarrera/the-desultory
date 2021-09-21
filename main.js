const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $panel = document.getElementById('panel');
// const $text1 = document.getElementById('text1');
// const $text2 = document.getElementById('text2');
const $divText1 = document.getElementById('divText1');
const $divText2 = document.getElementById('divText2');
const $textDiv = document.getElementById('textDiv');
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
  // $text1.setAttribute('src', '');
  // $text2.setAttribute('src', '');
  $divText1.textContent = '';
  $divText2.textContent = '';
  $textDiv.innerHTML = '';

    if ($panelNum === 1) {
      setTimeout(() => {
        // $text1.setAttribute('src', `images/text/text1-1.png`)
        const $text1 = document.createElement('div')
        $text1.className = 'p1Text1 focus-in';
        $text1.textContent = 'So it begins. This miracle of life. Starting so humbly, but wanting more and more.';
        $textDiv.appendChild($text1);
      }, 2000);
      setTimeout(() => {
        // $text2.setAttribute('src', 'images/text/text1-2.png')
        const $text2 = document.createElement('div');
        $text2.className = 'p1Text2 focus-in';
        $text2.textContent = 'Through time and sheer force of will. It grows.'
        $textDiv.appendChild($text2);
      }, 3000);
    }

    // if ($panelNum === 2) {
    //   setTimeout(() => {
    //     $text1.setAttribute('src', `images/text/text2-1.png`)
    //     $text1.className = 'p1Text1 focus-in';
    //   }, 2000);
    //   setTimeout(() => {
    //     $text2.setAttribute('src', 'images/text/text2-2.png')
    //     $text2.className = 'p1Text2 focus-in';
    //   }, 3000);
    // }

    if ($panelNum === 3) {
      setTimeout(() => {
        $divText1.className = 'p3Text1 fade-in';
        $divText1.textContent = 'Evolving';
      }, 2000);
      setTimeout(() => {
        $divText2.className = 'p3Text2 fade-in';
        $divText2.textContent = `It yearns for what it doesn't have. An innate drive to improve, to become better, stronger. Its ancestor's struggle has brought it here. To this moment.`
      }, 3000);
    }

    if ($panelNum === 4) {
      setTimeout(() => {
        $divText1.className = 'p4Text1 fade-in';
        $divText1.textContent = 'It looks to the beyond and wonders what is out there.'
      }, 2000);
      setTimeout(() => {
        $divText2.className = 'p4Text2 fade-in';
        $divText2.textContent = 'Does it dare to dream?'
      }, 3000);
    }

}
