const myMap = new Map([
  ['name', 'Andria'],
  ['age', 25],
  ['country', 'Georgia'],
  ['language', 'Georgian'],
  ['hobby', 'Coding']
]);

console.log('Map size: ', myMap.size);

for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}

const keyToCheck = 'age';

console.log(myMap.has(keyToCheck));
