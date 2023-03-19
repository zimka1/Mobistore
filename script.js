
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

