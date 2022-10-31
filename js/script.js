const swiper1 = new Swiper(".trending__content", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".categories__content", {
  slidesPerView: 3,
  spaceBetween: 23,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
