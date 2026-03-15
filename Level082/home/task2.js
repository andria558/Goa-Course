function allFalsy (value) {
  let res = 0

  for (let x of value){
    if (!x) {
      res += 1;
    } else {
      return false;
    }
  }

  return res === value.length; 
 
}

console.log(allFalsy([false, 0, "", null, undefined])); // -- true
console.log(allFalsy([false, 0, "non-empty"]));         // -- false