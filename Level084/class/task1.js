const products = [
  { name: "iphone laptop", price: 1500 },
  { name: "android phone", price: 400 },
  { name: "playstation", price: 1600 },
  { name: "redmi phone", price: 350 }]

const productNames = products.map(product => product.name);
console.log(productNames);


const affordableProducts = products.filter(product => {
  return product.price < 100;
})

console.log(affordableProducts);


const totalPrice = products.reduce((current, next) => {
  return current + next.price;
}, 0)

console.log(totalPrice);

const productNamesReversed = products.reduceRight((product, nextproduct )=> product + ' - ' + nextproduct.name, '');

console.log(productNamesReversed);
