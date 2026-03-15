const customerOrders = [
  {
    orderId: 101,
    customerId: 2001,
    items: [
      { title: "Eloquent JavaScript", price: 15, quantity: 1 },
      { title: "You Don't Know JS", price: 25, quantity: 2 }
    ],
    shippingAddress: "123 JS Lane",
    isDelivered: true
  },
  {
    orderId: 102,
    customerId: 2002,
    items: [
      { title: "JavaScript: The Good Parts", price: 8, quantity: 1 }
    ],
    shippingAddress: "456 Node Street",
    isDelivered: false
  }
];


const allOrdersHaveItems = customerOrders.every(
  order => order.items.length > 0
);
console.log(allOrdersHaveItems); 

const hasPendingDelivery = customerOrders.some(
  order => order.isDelivered === false
);
console.log(hasPendingDelivery); 

customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);

  order.items.forEach(item => {
    console.log(` - ${item.title} (Quantity: ${item.quantity})`);
  });

  const onlyExpensive = order.items.every(item => item.price > 10);
  console.log(
    `Order ${order.orderId} contains only expensive books: ${onlyExpensive}`
  );

  const hasMultipleCopies = order.items.some(item => item.quantity > 1);
  console.log(
    `Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`
  );
});
