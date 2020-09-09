$(function() {
    var scroll = $(document).scrollTop();
    var navHeight = $('.navigation').outerHeight();
    $(window).scroll(function() {
        var scrolled = $(document).scrollTop();
        if(scrolled > 20) {
            $('nav').addClass('nav-border');
        } else {
            $('nav').removeClass('nav-border');
        }
        // if(scrolled > navHeight) {
        //     $('.nav').addClass('sticky');
        //     $('.nav').removeClass('sticky-top');
        // } else {
        //     $('.nav').removeClass('sticky');
        // }
        scroll = $(document).scrollTop();
    })
})

window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


const image = document.querySelectorAll('.portofolio-item-wrapper');

image.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.childNodes[1].classList.add('img-darken');
    });
    img.addEventListener('mouseout', () => {
        img.childNodes[1].classList.remove('img-darken');
    });
});

  ///////////////////////// Footer rights ///////////
  let date = new Date().getFullYear();
  console.log(date);
  
  let currentYear = document.querySelector('.date');
  currentYear.innerHTML = date;

  // const mediaQuerie = window.matchMedia(' (device-width: 425px)');

  // if(mediaQuerie.matches) {
  //   alert('Hello!');
  // }

