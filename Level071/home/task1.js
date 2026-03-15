
let numsArray = [10, 20, 30, 40];
let strArray = ["a", "b", "c", "d"];

let combinedArray = numsArray.concat(strArray);
console.log("After concatenation:", combinedArray);

combinedArray.copyWithin(4, 0, 3);
console.log("After copyWithin:", combinedArray);

combinedArray.fill("filled", 2, 5);
console.log("After fill:", combinedArray);

combinedArray.pop();
console.log("After pop:", combinedArray);

combinedArray.shift();
console.log("After shift:", combinedArray);

combinedArray.unshift(100, 200);
console.log("After unshift:", combinedArray);


// --------------------------------------------------------------------------------------------------

// CHALLANGE

function modifyArray(arr) {
  arr.copyWithin(4, 0, 3);
  arr.fill("filled", 2, 5);
  arr.pop();
  arr.shift();
  arr.unshift(100, 200);

  return arr;
}
