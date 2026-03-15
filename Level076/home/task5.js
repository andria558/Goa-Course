// Creating h3 element with txt content "'Inserted Heading."
const H3 = document.createElement('h3');
H3.textContent ='Inserted Heading.';
// insert elem before body firstchild elem
const firstchild = document.body.firstElementChild;
document.body.insertBefore(H3, firstchild);