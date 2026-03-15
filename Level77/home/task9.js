
const images = [
  'html.jpeg',
  'css.jpeg',
  'js.jpeg',
];

let currentIndex = 0;


const imgEl = document.getElementById('myImage');
const btnEl = document.getElementById('nextBtn');


imgEl.src = images[currentIndex];


btnEl.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;

  setTimeout(() => {
    imgEl.src = images[currentIndex];
  }, 0);
});

