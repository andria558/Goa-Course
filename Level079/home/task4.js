
function counterGame() {
  let counter = 0;
  counter++;
  console.log(counter);
}

counterGame();  // 1
counterGame();  // 1
counterGame();  // 1

// if counter variable was global result will be 1 <br>2 <br>3


// result is 1 every time becuse after incrementing counter and printing its value returns to 0 becuse its local variable and if variable created out from function its will be global and result will be incrases by 1 