function addValueToEnd(array, value) {
  let newLength = array.push(value);
  return newLength;
}

let myArray = [1, 2, 3];
let result = addValueToEnd(myArray, 4);
console.log(result);
console.log(myArray);
