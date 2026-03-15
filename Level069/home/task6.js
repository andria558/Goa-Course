function sumArrayElements(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

let numbers = [2, 4, 6, 8];
console.log(sumArrayElements(numbers));
