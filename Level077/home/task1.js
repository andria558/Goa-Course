`#1 Add a Class:  ============================`

// Create an HTML div element with an id of "myDiv".
let Div = document.createElement('div');
Div.id = 'myDiv';

// Write JavaScript code to add the class "highlight" to the div element.
Div.classList.add('highlight');

`#2 Remove a Class:  ============================`

// Continuing from the previous task, write JavaScript code to remove the "highlight" class from the div element.
Div.classList.remove('highlight');

`#3 Toggle a Class:   ============================`

// Create an HTML button element with an id of "toggleButton" and a div element with an id of "targetDiv". 
let Button = document.createElement('button');
Button.id = 'targetDiv';

// Write JavaScript code that adds an event listener to the button.
Button.addEventListener('click', function() {
  Button.classList.toggle('active');
})

`#4 Check for a Class:  ============================`

// Create an HTML p element with an id of "checkParagraph" and add the class "important".
let P = document.createElement('p');
P.id = 'checkParagraph';
P.classList.add('important');

// Write JavaScript code to check if the p element has the class "important". Log the result (true or false) to the console.
if (P.classList.contains('important')) {
  console.log('True');
} else {
  console.log('False');
}

`#5 Replace a class:  ============================`

// Create an html div with an id of "replaceDiv" and add the class "red".
let DivI = document.createElement('div');
DivI.id = 'replaceDiv';
DivI.classList.add('red');

// Write Javascript code to replace the "red" class with the "blue" class.
DivI.classList.replace('red', 'blue')

`#6 Item method:  ============================`

// Create an html div with an id of "itemDiv" and add the classes "class1 class2 class3".
let DivII = document.createElement('div');
DivII.id = 'itemDiv';
DivII.classList.add('class1 class2 class3');
let itemDiv = document.getElementById('itemDiv')
// Write javascript code to log the second class to the console using the item method.
secondClass = itemDiv.classList.item(1)
console.log(secondClass);
