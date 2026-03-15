var library = [
  { 
    title: "Book One", 
    author: "Author A", 
    copies: 5 
},
  { 
    title: "Book Two", 
    author: "Author B", 
    copies: 3 
},
  { 
    title: "Book Three", 
    author: "Author C", 
    copies: 7 
}
];

function addBook(book) {
  library.push(book);
  return library;
}

function removeLastBook() {
  library.pop();
  return library;
}

function updateBookCopies(title, newCopies) {
  var index = library.findIndex(function(book) {
    return book.title === title;
  });
  if (index !== -1) {
    var updatedBook = Object.assign({}, library[index], { copies: newCopies });
    library.splice(index, 1, updatedBook);
  }
  return library;
}

function listBooks() {
  return library.map(function(book) {
    return book.title;
  }).join(",");
}

function extractBooks() {
  return library.slice(0, 2);
}

function modifyBooks() {
  library.copyWithin(library.length - 1, 0, 1);
  return library;
}

function resetCopies(newCopies) {
  var arr = new Array(library.length).fill(newCopies);
  for (var i = 0; i < library.length; i++) {
    library[i].copies = arr[i];
  }
  return library;
}

function removeFirstBook() {
  library.shift();
  return library;
}

function addFirstBook(book) {
  library.unshift(book);
  return library;
}
