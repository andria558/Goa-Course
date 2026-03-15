function add(a, b) {
  return a + b;
}

console.log("Named Function Example 1.1 (add):", add(5, 3)); 

function greet(name) {
  return `Hello, ${name}!`;
}

console.log("Named Function Example 1.2 (greet):", greet("Alice"));

const multiply = function(a, b) {
  return a * b;
};

console.log("Anonymous Function Example 2.1 (multiply):", multiply(4, 6));
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

const subtract = (a, b) => a - b;

const findMax = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log("Arrow Function Example 3.2 (findMax):", findMax(7, 12));
