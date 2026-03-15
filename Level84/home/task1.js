const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "jony", email: "jony@example.com" },
  { name: "Charlie", email: "charlie@example.com" }
];
const formattedEmails = users.map(user => `<${user.email}>`);

console.log(formattedEmails);

