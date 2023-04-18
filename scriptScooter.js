// Слайдер feedback

const slider2 = document.querySelector('.feedBack  .slider');
const slides2 = slider2.querySelectorAll('.feedBack  .slide');
const prevBtn2 = document.querySelector('.feedBack  .slider-prev');
const nextBtn2 = document.querySelector('.feedBack  .slider-next');

let currentSlide2 = 0;

function goToSlide2(n) {
  slider2.scrollLeft = slides2[n].offsetLeft;
  currentSlide2 = n;
}

function nextSlide2() {
  if (currentSlide2 === slides2.length - 4) {
    goToSlide2(0);
  } else {
    goToSlide2(currentSlide2 + 1);
  }
}

function prevSlide2() {
  if (currentSlide2 === 0) {
    goToSlide2(slides2.length - 1);
  } else {
    goToSlide2(currentSlide2 - 1);
  }
}


prevBtn2.addEventListener('click', prevSlide2);
nextBtn2.addEventListener('click', nextSlide2);

goToSlide2(0);


// Слайдер на странице с товаром 
const slider3 = document.querySelector('.description-imeges .slider');
const slides3 = slider3.querySelectorAll('.description-imeges .slide');
const dots3 = document.querySelectorAll('.description-imeges .slider-dot');

let currentSlide3 = 0;

function goToSlide3(n) {
  slider3.scrollLeft = slides3[n].offsetLeft;
  currentSlide3 = n;
  setActiveDot3();
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


goToSlide3(0);



