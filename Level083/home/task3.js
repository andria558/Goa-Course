const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
doubledNumbers = []
arr.forEach((num, i) => {
  arr[i] = num * 2;
  doubledNumbers.push(arr[i]);
});

console.log(doubledNumbers);