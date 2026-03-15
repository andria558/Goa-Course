const nums = [1,2,3,4,5,6,7,8,9,11,10,2,14];
console.log(nums);

const evennums = nums.filter(num => {
  return num % 2 == 0;
})
console.log(evennums);


const squarenums = evennums.map(number => number ** 2)
console.log(squarenums);
