const myMap = new Map([
  ["name", "ლომი"],
  [42, "Meaning of life"],
  [true, "აქტიურია"],
  ["isAdmin", false],
  [{ id: 1 }, "ობიექტი"]
]);

const length = myMap.size;

for (const [key, value] of myMap.entries()) {
  console.log("Key:", key);
  console.log("Value:", value);
  console.log("------");
}

const hasORnot = myMap.has("True");
console.log(hasORnot);


const repeatedArray = ["apple", "apple", "apple", "banana", "banana", "banana", "cherry", "cherry", "cherry"];
const uniqueSet = new Set(repeatedArray);
const uniqueArray = [...uniqueSet];

console.log(uniqueArray);
