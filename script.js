
// Функции для открытия Navbar на маленьких экранах

menu1.onclick = function myFunction(){
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("columnTopnav");
  if (x.className === "topnav"){
      x.className += " responsive";
      y.className += " responsive";
  }else{
      x.className = "topnav";
      y.className = "columns-header-item3";
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
      y.className = "columns-header-item3";
  }
}






// Первый слайдер на главной странице 



const slider = document.querySelector('.msscooter .slider');
const slides = slider.querySelectorAll('.msscooter .slide');
const prevBtn = document.querySelector('.msscooter .slider-prev');
const nextBtn = document.querySelector('.msscooter .slider-next');
const dots = document.querySelectorAll('.msscooter .slider-dot');

let currentSlide = 0;
let startX = 0;
let endX = 0;

function goToSlide(n) {
  slider.scrollLeft = slides[n].offsetLeft;
  currentSlide = n;
  setActiveDot();
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentSlide - 1);
  }
}

function setActiveDot() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Touch events for swiping
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  if (endX < startX) {
    nextSlide();
  } else if (endX > startX) {
    prevSlide();
  }
});

goToSlide(0);




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


// Вопрос-ответ


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



// Добавление карточек


const cardsData = [];

for (let i = 0; i < 6; i++) {
  cardsData.push({
    name: 'Электросамокат Midway i-Max Pro',
    image: 'img/main/card/midway.png',
    price: '38900 ₽',
    detailsUrl: 'scooter.html',
    features: [
      { title: 'Максимальная скорость', value: '35 км/час' },
      { title: 'Пробег на одном заряде', value: 'до 45 км' },
      { title: 'Мощность двигателя', value: '600 W' },
      { title: 'Аккумулятор', value: '18000 mAh' },
      { title: 'Вес самоката', value: '22 кг' },
      { title: 'Максимальная нагрузка', value: '150 кг' },
      { title: 'Гарантия', value: '1 год' },
      { title: 'Колёса', value: '10 дм' }
    ]
  })
}

const cardTemplate = document.querySelector('#katalog-card-template');
document.querySelectorAll('.katalog-columns').forEach(container => {
  cardsData.forEach(data => {
    const card = cardTemplate.content.cloneNode(true);
    const cardImage = card.querySelector('.katalog-img');
    const cardName = card.querySelector('.katalog-card-name');
    const cardPrice = card.querySelector('.money');
    const cardFeatures = card.querySelector('.midway');
    const cardDetailsBtn = card.querySelector('.btn');

    cardImage.src = data.image;
    cardName.textContent = data.name;
    cardPrice.textContent = data.price;

    data.features.forEach(feature => {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      const valueCell = document.createElement('td');
      titleCell.className = 'characteristica';
      valueCell.className = 'value';
      titleCell.textContent = feature.title;
      valueCell.textContent = feature.value;
      row.appendChild(titleCell);
      row.appendChild(valueCell);
      cardFeatures.appendChild(row);
    });

    cardDetailsBtn.addEventListener('click', () => {
      window.location.href = data.detailsUrl;
    });

    container.appendChild(card);
    
  });
});









