function firstMessage() {
  console.log("Starting the sequence.");
}

function secondMessage() {
  console.log("Sequence is in progress.");
}

function thirdMessage() {
  console.log("Sequence completed!");
}

function runMessageSequence() {
  setTimeout(function () {
    firstMessage();
  }, 1000);

  setTimeout(function () {
    secondMessage();
  }, 2000);

  setTimeout(function () {
    thirdMessage();
  }, 3000);
}

runMessageSequence();
