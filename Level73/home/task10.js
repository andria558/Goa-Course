/**
 * Logs a personalized greeting based on the current hour,
 * then updates it every second.
 */
function dynamicGreeting() {
  var now = new Date();
  var hour = now.getHours();
  var greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  console.log(greeting);
}


dynamicGreeting();
setInterval(dynamicGreeting, 1000);
