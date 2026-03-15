function getDayOfWeek(year, month, day) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(year, month, day);
  return daysOfWeek[date.getDay()];
}

console.log(getDayOfWeek(1993, 7, 12));
