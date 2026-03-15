// get acces to html elements and create varii\iables
let divWithId = document.getElementById('DivId');
let paragramWithClass = document.getElementsByClassName("Pclass");
let button = document.getElementsByTagName('button');

console.log(paragramWithClass)
// change color----

divWithId.style.color = 'red';
button[0].style.color = 'red';
paragramWithClass[0].style.color = 'red';

// change background----

divWithId.style.backgroundColor = 'blue';
button[0].style.backgroundColor = 'yellow';
paragramWithClass[0].style.backgroundColor = 'green';

// change font----

divWithId.style.fontFamily = 'cursive';
button[0].style.fontFamily = 'cursive';
paragramWithClass[0].style.fontFamily = 'roboto';

// change font size----

divWithId.style.fontSize = '2rem';
button[0].style.fontSize = '1rem';
paragramWithClass[0].style.fontSize = '1.5rem';

// change text content----

divWithId.textContent = 'new content';
paragramWithClass.textContent = 'new paragram content';
button.textContent = 'new btn content';