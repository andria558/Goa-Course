function asyncFirst() {
  setTimeout(() => {
    console.log("First async done");
  }, 2000);
}

function asyncSecond() {
  setTimeout(() => {
    console.log("Second async done");
  }, 1000);
}

asyncFirst();
asyncSecond();
