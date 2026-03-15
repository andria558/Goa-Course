function startTimer() {
  var count = 0;
  var display = document.getElementById('timer');

  setInterval(function() {
    count = count + 1;
    display.innerText = count;
  }, 1000);
}


startTimer();
