mainId = prompt("Enter product id: ")
mainPrice = Number(prompt("Enter product price: "))
mainDiscount = Number(prompt("Enter product discount: "))


function Product(productId, price, discount) {
    this.productId = productId;
    this.price = price;
    this.discount = discount;

    this.changePrice = function() {
        const discountedPrice = this.price - (this.price * this.discount / 100);
        console.log(`${this.productId} price: ${this.price}`);
        console.log(`${this.productId} new price: ${discountedPrice}`);
    }
}


const product = new Product(mainId, mainPrice, mainDiscount);
product.changePrice();
