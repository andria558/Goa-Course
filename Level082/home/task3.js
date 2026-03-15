function removeFalsy(arr) {
  return arr.filter(Boolean);
}


console.log(removeFalsy([0,"",false,NaN,'hello', 42]));
