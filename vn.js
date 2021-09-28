const $vnPanel = document.getElementById('vnPanel');

window.addEventListener('load', () => {
  vnLoad();
});

function vnLoad() {
  vnPic();
  vnTools();
}

function vnPic() {
  const $vnPicDiv = document.createElement('div');
  $vnPanel.appendChild($vnPicDiv);

  const $vnPic = document.createElement('img');
  $vnPic.setAttribute('src', 'http://www.fillmurray.com/g/700/700');
  $vnPicDiv.appendChild($vnPic);
}

function vnTools() {
  const $vnToolBar = document.createElement('div');
  $vnPanel.appendChild($vnToolBar);

  const $vnOptOne = document.createElement('button');
  $vnOptOne.textContent = 'Option One';

  const $vnOptTwo = document.createElement('button');
  $vnOptTwo.textContent = 'Option Two';

  $vnPanel.appendChild($vnOptOne);
  $vnPanel.appendChild($vnOptTwo);
}
