function concatAndPush(arr1, arr2) {
  
  let concatenatedArray = arr1.concat(arr2);

  concatenatedArray.push("value(goa best)");

  return concatenatedArray;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = concatAndPush(array1, array2);
console.log(result);
