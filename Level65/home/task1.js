
let book = {
  title: "წიგნი", 
  author: "ვიღაც",
  releaseYear: 2024,
  genre: "ანიმაცია, ფანტასტიკა",
  price: 19.99
};


console.log(book);

console.log(book.title);
console.log(book["title"]);

console.log(book.author);
console.log(book["author"]);

console.log(book.releaseYear);
console.log(book["releaseYear"]);

console.log(book.genre);
console.log(book["genre"]);

console.log(book.price);
console.log(book["price"]);

console.log("წიგნის სახელია '" +  book.title + ", ავტორია " +  book.author + ", გამოშვების წელი არის " + book.releaseYear + ", ჟანრი არის " + book.genre + ", ხოლო ფასი - " + book.price + " ლარი.");
