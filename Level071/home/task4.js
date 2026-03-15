function comprehensiveArrayTask(arr1, arr2, arr3) {
  let mergedArray = arr1.concat(arr2);
  
  mergedArray.copyWithin(5, 0, 3);
  
  mergedArray.fill(0, 6);
  
  mergedArray.pop();
  
  mergedArray.shift();

  mergedArray.unshift(100, 200);
  
  mergedArray.splice(2, 2, arr3);

  let slicedArray = mergedArray.slice(-5);
  return slicedArray.join(',');
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = ['a', 'b'];

let result = comprehensiveArrayTask(arr1, arr2, arr3);
console.log(result);