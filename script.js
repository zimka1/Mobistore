
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


const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumbs img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

// Переключение на слайд по индексу
function goToSlide(index) {
  // Скрытие всех слайдов
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  // Показ нужного слайда
  slides[index].classList.add('active');

  // Подсветка соответствующей картинки-эскиза
  thumbs.forEach(thumb => {
    thumb.classList.remove('active');
  });
  thumbs[index].classList.add('active');
}

// Переключение на следующий слайд
function nextSlide() {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

// Переключение на предыдущий слайд
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  goToSlide(currentIndex);
}

// Обработчики событий для кнопок вперед и назад
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Обработчики событий для картинок-эскизов
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    currentIndex = index;
    goToSlide(currentIndex);
  });
});

// Показ первого слайда и первой картинки-эскиза
goToSlide(0);
thumbs[0].classList.add('active');
