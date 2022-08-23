const swiper = new Swiper(".about-swiper", {
  loop: true,
  spaceBetween: 40,
// If we need pagination
 pagination: {
    el: ".swiper-pagination",
},
 // Navigation arrows
  navigation: {
    prevEl: "[data-about='prev']",
    nextEl: "[data-about='next']",
  },

});