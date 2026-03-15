const button = document.getElementById('mybtn');
const paragraph = document.getElementById('myparagraph').classList;

button.addEventListener('click', () => {
  paragraph.toggle('hideOrShow');

})