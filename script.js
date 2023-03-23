window.addEventListener('resize',(e)=> { 
  document.querySelector('.container_gallery').style.transform = 
    document.body.clientWidth>1300 ? '' : 
      `scale(${document.body.clientWidth/1380}) translate(${-(1300-document.body.clientWidth)/2}px)`; 
});

menu1.onclick = function myFunction(){
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("columnTopnav");
  if (x.className === "topnav"){
      x.className += " responsive";
      y.className += " responsive";
  }else{
      x.className = "topnav";
      y.className = "column3";
  }
}
menu2.onclick = function myFunction(){
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("columnTopnav");
  if (x.className === "topnav"){
      x.className += " responsive";
      y.className += " responsive";
  }else{
      x.className = "topnav";
      y.className = "column3";
  }
}

function clearTextarea(element) {
  if (element.value == element.defaultValue) {
    element.value = '';
  }
}


const slides = document.querySelectorAll('.msScooter .slide');
const thumbs = document.querySelectorAll('.msScooter .thumbs img');
const prev = document.querySelector('.msScooter .prev');
const next = document.querySelector('.msScooter .next');
const sliderContainer = document.querySelector('.msScooter .slider-container');
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function goToSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');

  thumbs.forEach(thumb => {
    thumb.classList.remove('active');
  });
  thumbs[index].classList.add('active');
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  goToSlide(currentIndex);
}

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > 0) {
    prevSlide();
  } else if (swipeDistance < 0) {
    nextSlide();
  }
}

sliderContainer.addEventListener('touchstart', event => {
  touchStartX = event.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', event => {
  touchEndX = event.changedTouches[0].clientX;
  handleSwipe();
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    goToSlide(currentIndex);
  });
});

goToSlide(0);
thumbs[0].classList.add('active');






const slides2 = document.querySelectorAll('.feedback .slide');
const prev2 = document.querySelector('.feedback .prev');
const next2 = document.querySelector('.feedback .next');
const sliderContainer2 = document.querySelector('.feedback .slider-container');
let currentIndex2 = 0;
let touchStartX2 = 0;
let touchEndX2 = 0;
// Переключение на слайд по индексу
function goToSlide2(index) {
  // Скрытие всех слайдов
  slides2.forEach(slide => {
    slide.classList.remove('first');
  });
  // Показ нужного слайда
  slides2[index].classList.add('first');
}

// Переключение на следующий слайд
function nextSlide2() {
  currentIndex2++;
  if (currentIndex2 > slides2.length - 1) {
    currentIndex2 = 0;
  }
  goToSlide2(currentIndex2);
}

// Переключение на предыдущий слайд
function prevSlide2() {
  currentIndex2--;
  if (currentIndex2 < 0) {
    currentIndex2 = slides2.length - 1;
  }
  goToSlide2(currentIndex2);
}
function handleSwipe2() {
  const swipeDistance = touchEndX2 - touchStartX2;
  if (swipeDistance > 0) {
    prevSlide2();
  } else if (swipeDistance < 0) {
    nextSlide2();
  }
}

sliderContainer2.addEventListener('touchstart', event => {
  touchStartX2 = event.touches[0].clientX;
});

sliderContainer2.addEventListener('touchend', event => {
  touchEndX2 = event.changedTouches[0].clientX;
  handleSwipe2();
});
// Обработчики событий для кнопок вперед и назад
next2.addEventListener('click', nextSlide2);
prev2.addEventListener('click', prevSlide2);




// Показ первого слайда и первой картинки-эскиза
goToSlide2(0);
