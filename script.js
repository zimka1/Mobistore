
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



function clearTextarea(element) {
  if (element.value == element.defaultValue) {
    element.value = '';
  }
}





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


$(document).ready(function(){
  
  const slider = $("#slider3").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag:true,
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
