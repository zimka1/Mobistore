// Слайдер на странице с товаром 

const slider3 = document.querySelector('.description-imeges .slider');
const slides3 = slider3.querySelectorAll('.description-imeges .slide');
const prevBtn3 = document.querySelector('.description-imeges .slider-prev');
const nextBtn3 = document.querySelector('.description-imeges .slider-next');
const dots3 = document.querySelectorAll('.description-imeges .slider-dot');

let currentSlide3 = 0;

function goToSlide3(n) {
  slider3.scrollLeft = slides3[n].offsetLeft;
  currentSlide3 = n;
  setActiveDot3();
}

function nextSlide3() {
  if (currentSlide3 === slides3.length - 1) {
    goToSlide3(0);
  } else {
    goToSlide3(currentSlide3 + 1);
  }
}

function prevSlide3() {
  if (currentSlide3 === 0) {
    goToSlide3(slides3.length - 1);
  } else {
    goToSlide3(currentSlide3 - 1);
  }
}

function setActiveDot3() {
  dots3.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide3);
  });
}

dots3.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide3(index);
  });
});

prevBtn3.addEventListener('click', prevSlide3);
nextBtn3.addEventListener('click', nextSlide3);

goToSlide3(0);
