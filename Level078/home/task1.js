const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const slider = document.getElementById("slider");
let slideIndex = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", () => {
  createDots();
  showSlide(slideIndex);
  intervalId = setInterval(nextSlide, 5000);
});

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      clearInterval(intervalId);
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  });
}

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;

  slides.forEach(slide => slide.classList.remove("displaySlide"));
  slides[slideIndex].classList.add("displaySlide");

  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(++slideIndex);
}

function prevSlide() {
  clearInterval(intervalId);
  showSlide(--slideIndex);
}

slider.addEventListener("mouseenter", () => clearInterval(intervalId));
slider.addEventListener("mouseleave", () => {
  intervalId = setInterval(nextSlide, 5000);
});

