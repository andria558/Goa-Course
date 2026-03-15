console.log("Start program");

setTimeout(() => {
  console.log("Async 1 (2s)");
}, 2000);

setTimeout(() => {
  console.log("Async 2 (1s)");
}, 1000);

console.log("End program");
