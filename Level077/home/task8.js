const myDiv = document.getElementById('MyDiv');
const myBtn = document.getElementById('MyButton');

myBtn.addEventListener('click', () => {
let randomColor = `hsl(${Math.floor(Math.random()*360)}, 70%, 55%)`
myDiv.style.background = randomColor;
})

