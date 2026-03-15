function getStringLengths(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
}

let words = ["hello", "world", "JavaScript"];
console.log(getStringLengths(words)); 
