function removeLastElement(array) {
  let removedElement = array.pop();
  return removedElement;
}

let myArray = [10, 20, 30, 40];
let lastElement = removeLastElement(myArray);
console.log(lastElement);
console.log(myArray);
