
let people = [
  { name: 'Alice' },
  { name: 'Bob' }
];

let places = [
  { city: 'Paris' },
  { city: 'London' },
  { city: 'Tokyo' }
];

let mergedArray = people.concat(places);
console.log("After concatenation:", mergedArray);

mergedArray.copyWithin(2, 0, 2);
console.log("After copyWithin:", mergedArray);

mergedArray.fill({ city: 'New York' }, mergedArray.length - 2);
console.log("After fill:", mergedArray);

mergedArray.pop();
console.log("After pop:", mergedArray);

mergedArray.shift();
console.log("After shift:", mergedArray);

mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });
console.log("After unshift:", mergedArray);
