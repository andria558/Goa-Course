function sumNumbers (...nums) {
  return nums.reduce((acc, curr) => acc + curr , 0)
  
}

console.log(sumNumbers(1,2));
