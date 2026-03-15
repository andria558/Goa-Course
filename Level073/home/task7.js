function scheduleMessage() {
  let message = prompt("Enter the message you want to log:");

  let delayInput = prompt("Enter the delay in milliseconds (e.g. 3000):");
  let delay = Number(delayInput, 10);

  if (!message) {
    console.error("No message entered. Please try again.");
    return;
  }
  if (delay < 0) {
    console.error("Invalid delay. Please enter a non-negative number.");
    return;
  }

  console.log("Your message will appear in " + delay + " ms...");

  setTimeout(function() {
    console.log(message);
  }, delay);
}

scheduleMessage();
