$(document).ready(function(){
  $('.slider').slick({
  	arrows:false,
  	dots:true,
  	appendDots:'.slider-dots',
  	dotsClass:'dots'
  });

  let hamburger = document.querySelector('.hamburger');
  let leftArrow = document.querySelector('.left-arrow');
  let mobileNav = document.querySelector('.mobile-nav');
  let navMenu = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', function(){
  	mobileNav.classList.add('open');
  });

  leftArrow.addEventListener('click', function(){
  	mobileNav.classList.remove('open');
  });

  navMenu.addEventListener('click', function(){
  	navMenu.classList.remove('open');
  });
});