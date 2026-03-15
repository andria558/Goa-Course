const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let interval = setInterval(nextSlide, 4000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetInterval();
  });
});

document.querySelector('.game-slider').addEventListener('mouseenter', () => clearInterval(interval));
document.querySelector('.game-slider').addEventListener('mouseleave', () => interval = setInterval(nextSlide, 4000));

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 4000);
}
