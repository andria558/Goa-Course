
function Book(title, author, year) {
    
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return this.title + " by " + this.author + ", published in " + this.year;
  };
}

var book1 = new Book("1984", "George Orwell", 1949);
var book2 = new Book("Brave New World", "Aldous Huxley", 1932);
var book3 = new Book("Fahrenheit 451", "Ray Bradbury", 1953);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());
