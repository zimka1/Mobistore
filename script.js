
menu1.onclick = function myFunction(){
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("columnTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
    if (y.className === "column3"){
      y.className += " responsive";
    }else{
      y.className = "column3";
    }
}
menu2.onclick = function myFunction(){
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("columnTopnav");
  if (x.className === "topnav"){
      x.className += " responsive";
  }else{
      x.className = "topnav";
  }
  if (y.className === "column3"){
    y.className += " responsive";
  }else{
    y.className = "column3";
  }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView: 5,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });