const about = new Swiper(".about-swiper", {
  loop: true,
  spaceBetween: 40,
// If we need pagination
 pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
 // Navigation arrows
  navigation: {
    prevEl: "[data-about='prev']",
    nextEl: "[data-about='next']",
  },

});
const news = new Swiper(".news-swiper", {
// If we need pagination
 pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
 // Navigation arrows
  navigation: {
    prevEl: "[data-news='prev']",
    nextEl: "[data-news='next']",
  },

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 2.2
    },
    1280: {
      spaceBetween: 45,
      slidesPerView: 4

    }
  }

});