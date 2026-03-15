let span = document.getElementById('display');
const plusbtn = document.getElementById('plusbtn');
const minusbtn = document.getElementById('minusbtn');

let count = 0;


function plus() {
  count++;
  span.textContent = count;
}

function minus() {
  count--;
  span.textContent = count;
}

plusbtn.addEventListener('click', plus);
minusbtn.addEventListener('click', minus);