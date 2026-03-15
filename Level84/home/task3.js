const items = [
  { name: "Notebook", price: 5, quantity: 3 },
  { name: "Pen", price: 2, quantity: 10 },
  { name: "Backpack", price: 25, quantity: 1 }
];

const totalValue = items.reduce((accumulator, item) => {
  return accumulator + (item.price * item.quantity);
}, 0);

console.log(totalValue);
