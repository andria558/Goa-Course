const books = {
  "The Alchemist": "Paulo Coelho",
  "1984": "George Orwell",
  "To Kill a Mockingbird": "Harper Lee",
  "Pride and Prejudice": "Jane Austen"
};

const bookTitles = [];

for (let title in books) {
  bookTitles.push(title);
}

console.log(bookTitles);
