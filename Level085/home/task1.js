const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" }
];

const userWithId3 = users.find(user => user.id === 3);

console.log(userWithId3);
