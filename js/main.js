// Menu scroll down animation
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });


//header sticky

  window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    document.querySelector('.login ').style.display = "none";
    document.querySelector('.login-auth').style.display = "none";
    header.classList.add("sticky");
  } else {
    document.querySelector('.login').style.display = "block";
    header.classList.remove("sticky");
  }
}



function show(x,y){
  document.querySelector(x).style.opacity ="0.2";
  document.querySelector(y).style.display ="block";
}
function hide(x,y){
  document.querySelector(x).style.opacity ="1";
  document.querySelector(y).style.display ="none";
}

// login func
$(document).ready(function(){
  $("#login").click(function(){
      $(".login-auth").toggle(1000,"linear");
  });
});
// Video config
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function videoPlay() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
  
}

// phone-menu
function menu(){
 var menu =  document.querySelector(".menu-header");
  menu.classList.toggle("style1");
}
function login_show(){
  var menu =  document.querySelector(".header");
    menu.classList.toggle("style2");
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZQJyIXDTTl9BQcslVkzz9KWyoGZG3i4o",
  authDomain: "justgamers-91f9a.firebaseapp.com",
  databaseURL: "https://justgamers-91f9a.firebaseio.com",
  projectId: "justgamers-91f9a",
  storageBucket: "",
  messagingSenderId: "860995181292"
};
firebase.initializeApp(config);

function upload(){
  var ref = firebase.database().ref("suggestion");
  var name = document.querySelector("#name").value;
  var game = document.querySelector("#game").value;
  var email = document.querySelector("#email").value ;
  var message = document.querySelector("#message").value ;
  
  var suggestion ={
  Name : name ,
  Game : game ,
  Email : email , 
  Description : message
  }

document.querySelector("#name").value = "";
document.querySelector("#game").value = "";
document.querySelector("#email").value = "";
document.querySelector("#message").value = "";
alert("Thanks For your suggestion ")
  
  ref.push(suggestion);
}
