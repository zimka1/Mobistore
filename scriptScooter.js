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
  if(window.innerWidth >= 1400){
    if (currentSlide2 === slides2.length - 4) {
      goToSlide2(0);
    } else {
      goToSlide2(currentSlide2 + 1);
    }
  } else if(window.innerWidth >= 950){
    if (currentSlide2 === slides2.length - 3) {
      goToSlide2(0);
    } else {
      goToSlide2(currentSlide2 + 1);
    }
  } else if(window.innerWidth >= 600){
    if (currentSlide2 === slides2.length - 2) {
      goToSlide2(0);
    } else {
      goToSlide2(currentSlide2 + 1);
    }
  } else {
    if (currentSlide2 === slides2.length - 1) {
      goToSlide2(0);
    } else {
      goToSlide2(currentSlide2 + 1);
    }
  }
}

function prevSlide2() {
  if (currentSlide2 === 0) {
    if(window.innerWidth >= 1400){
      goToSlide2(slides2.length - 4);
    } else if(window.innerWidth >= 950){
      goToSlide2(slides2.length - 3);
    } else if(window.innerWidth >= 600){
      goToSlide2(slides2.length - 2);
    } else {
      goToSlide2(slides2.length - 1);
    }

  } else {
    if(window.innerWidth >= 1400 ){
      if (currentSlide2 > slides2.length - 4) {
        currentSlide2 = slides2.length - 4;
      }
    } else if(window.innerWidth >= 950 ){
      if (currentSlide2 > slides2.length - 3) {
        currentSlide2 = slides2.length - 3;
      }
    } else if(window.innerWidth >= 650 ){
      if (currentSlide2 > slides2.length - 2) {
        currentSlide2 = slides2.length - 2;
      }
    } else{
      if (currentSlide2 > slides2.length - 1) {
        currentSlide2 = slides2.length - 1;
      }
    }
    
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
let startX = 0;
let endX = 0;

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

slider3.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider3.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider3.addEventListener('touchend', () => {
  if (startX - endX > 50 && currentSlide3 < slides3.length - 1) {
    currentSlide3++;
  } else if (endX - startX > 50 && currentSlide3 > 0) {
    currentSlide3--;
  }
  goToSlide3(currentSlide3);
});

goToSlide3(0);



