
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
const sliderContainer = document.querySelector('.msScooter .slides');
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




$(document).ready(function(){
  
  const slider = $("#slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    mouseDrag:true,
    navText: [
      '<button class="prev" style=""><img src="img/slider/back.png" alt=""></button>',
        '<button class="next"><img src="img/slider/next.png" alt=""></button>'
    ],
    margin:0,
    stagePadding: 0,
    responsive:{
      400: {
        margin:10,
        stagePadding: 0
      },
      600: {
        margin:0,
        stagePadding: 0
      },
      900: {
          margin:20,
        stagePadding: 30
      }
    }
 });
});

$(document).ready(function(){
  
  const slider = $("#slider2").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    mouseDrag:true,
    navText: [
      '<button class="prev" style=""><img src="img/slider/back.png" alt=""></button>',
        '<button class="next"><img src="img/slider/next.png" alt=""></button>'
    ],
    dots:0,
    margin:0,
    stagePadding: 0,
    responsive:{
      300:{
        items:1,
        margin: -90,
        stagePadding:0
      },
      400:{
        items:1,
        margin: -140,
        stagePadding:0
      },
      500:{
        items:3,
        margin:250,
        stagePadding:0
      },
      600:{
        items:3,
        margin:250,
        stagePadding:0
      },
      730: {
        items: 3
      },
      1000: {
        items: 4,

      },
      1900: {
        items:4,
        margin: 0,
        stagePadding:0
       
      }
    }
 });
});


var acc = document.getElementsByClassName("accordionItemHeading");
var i;
var previous = null;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.border = "0px solid #FF1887"
      panel.style.margin = "0px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.border = "1px solid #FF1887"
      panel.style.margin = "10px";
    } 
    if (previous !== null) {
      previous.classList.remove("active");
      var prevPanel = previous.nextElementSibling;
      prevPanel.style.maxHeight = null;
      prevPanel.style.border = "0px solid #FF1887"
      prevPanel.style.margin = "0px";
    }
    if (previous == this){
      previous = null;
    } else{
      previous = this;
    }
  });
}
