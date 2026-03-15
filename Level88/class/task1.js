// Value Swapping
let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`); 

[a, b] = [b, a]; 

console.log(`After swapping: a = ${a}, b = ${b}`);  

// Unpack values from nested arrays
const nestedArr = [1, [2, 3], 4];
const [x, [y, z], w] = nestedArr;

console.log(`Unpacked values: x = ${x}, y = ${y}, z = ${z}, w = ${w}`);
