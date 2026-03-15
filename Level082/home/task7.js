const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};


console.log("Object keys:");
for (let key in person) {
  console.log(key);
}

const technologies = ["JavaScript", "React", "Node"];

console.log("Array values:");
for (let value of technologies) {
  console.log(value);
}
