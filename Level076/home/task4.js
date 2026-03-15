// 1. Create a <ul> element
let ul = document.createElement('ul');

// 2. Create items array and loop through it
let items = ['Item 1', 'Item 2', 'Item 3'];
for (let i = 0; i < items.length; i++) {
  let li = document.createElement('li');
  li.textContent = items[i];
  ul.appendChild(li);
}

// 3. Append the <ul> to the document body
document.body.appendChild(ul);

// 4. Access the first and last <li> child
const firstItem = ul.firstElementChild;
const lastItem = ul.lastElementChild;

// 5. Log them to the console
console.log('First child:', firstItem);
console.log('Last child:', lastItem);