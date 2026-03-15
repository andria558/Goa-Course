// Create a new <span> element with the text "This is a span."
let span = document.createElement('span');
span.textContent = 'This is a span.';
// Append this <span> element to an existing <div> element with the id "container."
const MainDiv = document.getElementById('container');
MainDiv.appendChild(span);
// Access and log the parent element of the <span> element.
const Parent = span.parentNode;
console.log(Parent)