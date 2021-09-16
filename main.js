const $next = document.getElementById('next');
const $prev = document.getElementById('prev');
const $panel = document.getElementById('panel');
let $panelNum = 1;

$next.addEventListener('click', function (event) {
  console.log('I hit next, bitch');
  $panelNum++;
  console.log('And the panel number is', $panelNum);
});

$prev.addEventListener('click', function (event) {
  console.log('I hit prev, hctib');
  $panelNum--;
  console.log('And the panel number is', $panelNum);
})
