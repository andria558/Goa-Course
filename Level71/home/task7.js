var cartItems = ["Apple", "Banana", "Orange"];
var prices = [1.2, 0.5, 0.8];

function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems: cartItems, prices: prices };
}

function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems: cartItems, prices: prices };
}

function replaceItem(index, newItem, newPrice) {
  cartItems.splice(index, 1, newItem);
  prices.splice(index, 1, newPrice);
  return { cartItems: cartItems, prices: prices };
}

function createReceipt() {
  return cartItems.join(",");
}

function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}
