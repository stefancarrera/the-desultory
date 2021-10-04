const $titleText = document.getElementById('title');
const $btmText = document.getElementById('btmText');

window.addEventListener('load', () => {
  setTimeout(() => {
    $titleText.textContent = "To";
    $titleText.className = "title tracking-out";
  }, 3000);
  setTimeout(() => {
    $titleText.textContent = "The Desultory";
    $titleText.className = "title tracking-in";
  }, 6000);
  setTimeout(() => {
    $titleText.className = "hidden";
    $btmText.className = "desultory";
    $btmText.textContent = "The Desultory";
  }, 7500)
});
