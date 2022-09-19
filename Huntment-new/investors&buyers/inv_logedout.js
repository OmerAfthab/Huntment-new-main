
const r_btn=document.getElementById('r_btn');
const l_btn= document.getElementById('l_btn');
const reg_form = document.getElementById('register_form');
const login_form = document.getElementById('login_form');
r_btn.addEventListener('click', function() {
    reg_form.classList.remove('hide_form');
    r_btn.classList.remove('add_opacity')
    login_form.classList.add('hide_form');
    l_btn.classList.add('add_opacity')

})
l_btn.addEventListener('click', function() {
    reg_form.classList.add('hide_form');
    r_btn.classList.add('add_opacity')
    login_form.classList.remove('hide_form');
    l_btn.classList.remove('add_opacity');

})

var password_field = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

password_field.addEventListener('focus', function(){
    document.getElementById("message").style.display = "block";
})

// When the user clicks outside of the password field, hide the message box
password_field.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
password_field.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(password_field.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(password_field.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(password_field.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(password_field.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


const pswrd2 = document.getElementById('confirm_psw');
const warning_div =document.getElementById('warn_div')
function matchPassword() {
  if(password_field.value === pswrd2.value) return
  else{
    warning_div.style.display="block";

  }
}
pswrd2.addEventListener('change', matchPassword);

// const swiper = new Swiper('.swiper', {
//     // loop: true,
//     slidesPerView: 1,
//     spaceBetween: 10,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
   
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 10,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 10,
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
let data = google.visualization.arrayToDataTable([
  ['Energy', 'Mhl'],
  ['Apparel',40],
  ['Finance',35],
  ['Coal',30],
  ['AI',20],
  ['Education',15],
  ['Oil & Gas Exploration',10],
 

  
]);

let options = {
  title:'Industries',
  is3D:true
};


let chart = new google.visualization.PieChart(document.getElementById('myChart1'));
  chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['UAE',40],
  ['Oman',30],
  ['Qatar',20],
  ['Bahrain',15],
  ['Kuwait',12.5],
  ['Saudi',10],


]);

var options = {
  title:'Locations',
  is3D:true
};

var chart = new google.visualization.PieChart(document.getElementById('myChart'));
  chart.draw(data, options);
}


// 
