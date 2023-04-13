
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


$(document).ready(function(){
  
  const slider = $("#slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    mouseDrag:true,
    navText: [
      '<button class="prev" style=""><img src="img/slider/back.png.svg" alt=""></button>',
        '<button class="next"><img src="img/slider/next.png.svg" alt=""></button>'
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


// Слайдер feedback


$(document).ready(function(){
  
  const slider = $("#slider2").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    mouseDrag:true,
    navText: [
      '<button class="prev" style=""><img src="img/slider/back.png.svg" alt=""></button>',
        '<button class="next"><img src="img/slider/next.png.svg" alt=""></button>'
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

// Слайдер на странице с товаром 

$(document).ready(function(){
  
  const slider = $("#slider3").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag:true,
 });
});


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
    image: 'img/main/card/midway.png.svg',
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