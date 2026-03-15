function clock() {
    time = new Date();
    loctime = time.toLocaleString('en-GE');
    UpdatingClock = document.getElementById('updtime').textContent = loctime;
}


clock();
setInterval(clock, 1000);