function getWeekdayName(dateObj) {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
  return weekdays[dateObj.getDay()];
}

function displayWeekday() {
  const input = document.getElementById('dateInput').value;
  const resultDiv = document.getElementById('dayResult');

  if (!input) {
    resultDiv.innerText = 'Please select a date.';
    return;
  }

  const selectedDate = new Date(input);
  const dayName = getWeekdayName(selectedDate);

  resultDiv.innerText = `That day is a ${dayName}.`;
}
document.getElementById('showDayBtn');
