function UpdateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

UpdateClock();
setInterval(UpdateClock, 1000)