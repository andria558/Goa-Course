
// ! Task I

const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

const firstString = mixedData.find(item => typeof item == 'string');

console.log(firstString);

// ! Task II

const fruits = ["Mango", "apple", "banana", "kiwi"];

const isFruitsArray = Array.isArray(fruits);

console.log(isFruitsArray);

// ! Task III

const stringLengths = Array.from(firstString, str => str.length);

console.log(stringLengths);

// ! Task IV

const copiedData = [...mixedData];

const reversedData = copiedData.reverse();

console.log(reversedData);

// ! Task V

const numbersOnly = mixedData.filter(item => typeof item === "number");

const sortedNumbers = numbersOnly.sort((a, b) => a - b);

console.log(sortedNumbers);
