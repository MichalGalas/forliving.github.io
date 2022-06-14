
$(document).ready(function(){


$(window).on('load',function(){
  $('.preloader').addClass('complete')
});

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  console.log(scroll);
  if(scroll >=50){
    $(".sticky").addClass("stickyadd");
  }else{
    $(".sticky").removeClass("stickyadd");
  }
});

// progress bars

var waypoint = new Waypoint({
  element: document.getElementById('experience'),
  handler: function() {

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:100%;transition:1s all;");
    p[1].setAttribute("style", "width:95%;transition:1.5s all;");
    p[2].setAttribute("style", "width:85%;transition:1.7s all;");
    p[3].setAttribute("style", "width:99%;transition:2s all;");
    p[4].setAttribute("style", "width:85%;transition:2.3s all;");
    p[5].setAttribute("style", "width:95%;transition:2.5s all;");


  },
   offset: '90%'
});

// adding fadeInUp animation to child of div with class .way-col
var $child = $('.way-fade-up').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInUp');
  },{offset: '90%'});
});

var $child = $('.way-fade-left').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInLeft');
  },{offset: '90%'});
});

var $child = $('.way-fade-right').children();
$child.each(function(){
  var self= $(this);
  $(this).waypoint(function(){
    self.addClass('animated fadeInRight');
  },{offset: '90%'});
});

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,   // since one item ou can remove it
    nav:false,
    // dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1,
    // animateOut : "fadeOut",
    animateIn : "fadeInRight"

});


var filterizd = $('.filter-container').filterizr({
   animationDuration: .5,

});

// $('.img-loaded').imagesLoaded()
//   .done( function( instance ) {
//     var filterizd = $('.filter-container').filterizr({
//        animationDuration: .5,
//
//     });
//   });


  var typed = new Typed(".element", {
  strings: ["John Doe", "a Developer","a Designer","a Businessman"],
  smartBackspace: true,
   typeSpeed: 100,
   backSpeed: 100,
   loop: true,
  loopCount: Infinity,
  startDelay: 1000
});


$('a').smoothScroll({

  speed:2000,
});

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
  $("#basic-form").validate();
});

$(".images img").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);