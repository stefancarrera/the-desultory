const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $textDiv = document.getElementById('textDiv');
const $panelDiv = document.getElementById('panelDiv');
let $panelNum = 1;

window.addEventListener("load", () => {
  text();
  changePanel();
  $next.disabled = true;
  $prev.disabled = true;
});

$next.addEventListener('click', () => {
  $next.disabled = true;
  $prev.disabled = true;
  if ($panelNum === 7) {
    $panelNum = 1;
    text();
    changePanel();
  } else if (($panelNum >= 1) && ($panelNum < 7)) {
    $panelNum++;
    text();
    changePanel();
  }
});

$prev.addEventListener('click', () => {
  $prev.disabled = true;
  $next.disabled = true;
  if ($panelNum === 1) {
    $panelNum = 7;
    text();
    changePanel();
  } else if (($panelNum <= 7) && ($panelNum > 1)) {
    $panelNum--;
    text();
    changePanel();
  }
});

function changePanel() {
  $panelDiv.innerHTML = '';

  if ($panelNum === 6) {
    const $panel = document.createElement('img');
    $panel.className = "panel fade-in"
    $panel.setAttribute('src', `images/skullo/${$panelNum}.png`);
    $panelDiv.appendChild($panel);

    setTimeout(() => {
      $panel.className = "panel flicker"
    },
      2000
    );

  } else {
    const $panel = document.createElement('img');
    $panel.className = "panel fade-in"
    $panel.setAttribute('src', `images/skullo/${$panelNum}.png`);
    $panelDiv.appendChild($panel);
  }

}

function text() {
  $textDiv.innerHTML = '';

    if ($panelNum === 1) {
      setTimeout(() => {
        const $text1 = document.createElement('div')
        $text1.className = 'p1Text1 focus-in';
        $text1.textContent = 'So it begins. This miracle of life. Starting so humbly, but wanting more and more.';
        $textDiv.appendChild($text1);
      }, 2000);
      setTimeout(() => {
        const $text2 = document.createElement('div');
        $text2.className = 'p1Text2 focus-in';
        $text2.textContent = 'Through time and sheer force of will. It grows.'
        $textDiv.appendChild($text2);
        $next.disabled = false;
        $prev.disabled = false;
      }, 3000);
    }

    if ($panelNum === 2) {
      setTimeout(() => {
        const $text1 = document.createElement('div');
        $text1.className = 'p2Text1 focus-in';
        $text1.textContent = 'Changes';
        $textDiv.appendChild($text1);
      }, 2000);
      setTimeout(() => {
        const $text2 = document.createElement('div');
        $text2.className = 'p2Text2 focus-in';
        $text2.textContent = 'Adapts'
        $textDiv.appendChild($text2);
        $next.disabled = false;
        $prev.disabled = false;
      }, 3000);
    }

    if ($panelNum === 3) {
      setTimeout(() => {
        const $text1 = document.createElement('div');
        $text1.className = 'p3Text1 fade-in';
        $text1.textContent = 'Evolves';
        $textDiv.appendChild($text1);
      }, 2000);
      setTimeout(() => {
        const $text2 = document.createElement('div');
        $text2.className = 'p3Text2 fade-in';
        $text2.textContent = `It yearns for what it doesn't have. An innate drive to improve, to become better, stronger. Its ancestor's struggle has brought it here. To this moment.`
        $textDiv.appendChild($text2);
        $next.disabled = false;
        $prev.disabled = false;
      }, 3000);
    }

    if ($panelNum === 4) {
      setTimeout(() => {
        const $text1 = document.createElement('div');
        $text1.className = 'p4Text1 fade-in';
        $text1.textContent = 'It looks to the beyond and wonders, what is out there.'
        $textDiv.appendChild($text1);
      }, 2000);
      setTimeout(() => {
        const $text2 = document.createElement('div');
        $text2.className = 'p4Text2 fade-in';
        $text2.textContent = 'Does it dare to dream?'
        $textDiv.appendChild($text2);
        $next.disabled = false;
        $prev.disabled = false;
      }, 3000);
    }

    if ($panelNum === 5) {
      setTimeout(() => {
        const $text1 = document.createElement('div');
        $text1.className = 'p5Text1 fade-in';
        $text1.textContent = 'Breaking forth from its watery prison, going further than any before it. Think of the nations and empires it has wrought with this act.';
        $textDiv.appendChild($text1);
        $next.disabled = false;
        $prev.disabled = false;
      }, 2000);
    }

    if ($panelNum === 6) {
      setTimeout(() => {
        const $img1 = document.createElement('img');
        $img1.setAttribute('src', 'images/text/text6-strike.png');
        $img1.className = 'p6Img1';
        $textDiv.appendChild($img1);
      }, 2000);
      setTimeout(() => {
        const $img2 = document.createElement('img');
        $img2.setAttribute('src', 'images/text/text6-bam.png');
        $img2.className = 'p6Img2';
        $textDiv.appendChild($img2);
        $next.disabled = false;
        $prev.disabled = false;
      }, 2100);
    }

    if ($panelNum === 7) {
      setTimeout(() => {
        const $img1 = document.createElement('img');
        $img1.setAttribute('src', 'images/text/skull-bubble.png');
        $img1.className = 'p7Img1 fade-in';
        $textDiv.appendChild($img1);
      }, 2000);
      setTimeout(() => {
        const $text1 = document.createElement('div');
        $text1.className = 'p7Text1 fade-in';
        $text1.textContent = 'Not this time.';
        $textDiv.appendChild($text1);
        $next.disabled = false;
        $prev.disabled = false;
      }, 2100);
    }

}
