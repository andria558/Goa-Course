const users = [
  { name: "Alice", age: 12 },
  { name: "Bob", age: 101 },
  { name: "Charlie", age: 17.11 }
];

const allAdults = users.every(user => user.age >= 18);

console.log(allAdults);