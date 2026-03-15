// სინქრონული ფუნქცია 1
function syncOne() {
  console.log("Sync One Executed");
}

// სინქრონული ფუნქცია 2
function syncTwo() {
  console.log("Sync Two Executed");
}

// ასინქრონული ფუნქცია 1
function asyncOne() {
  setTimeout(() => {
    console.log("Async One (2s) Finished");
  }, 2000);
}

// ასინქრონული ფუნქცია 2
function asyncTwo() {
  setTimeout(() => {
    console.log("Async Two (1s) Finished");
  }, 1000);
}

function runAll() {
  // შემდეგ ასინქრონული ფუნქციები იწყებენ მუშაობას
  asyncOne();
  asyncTwo();

  // ჯერ სინქრონული ფუნქციები სრულდება
  syncOne();
  syncTwo();


}

runAll();
