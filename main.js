const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const dialog = document.querySelector(".dialog");
const overlay = document.querySelector(".overlay");
const dialogOpenBtn = document.querySelector(".contact__button");
const dialogCloseBtn = document.querySelector(".dialog__close");
const popularSwiper = document.querySelector(".popular__swiper")

dialogOpenBtn?.addEventListener("click", () => {
  dialog.open = true;
});

dialogCloseBtn?.addEventListener("click", () => {
  dialog.open = false;
});

overlay?.addEventListener("click", () => {
  dialog.open = false;
});

nav.addEventListener("click", (event) => {
  if (event.target.classList.contains("nav__link")) {
    document.body.classList.remove("none-scroll");
    header.classList.remove("header_active");
    burger.classList.remove("burger_active");
  }
});

burger.addEventListener("click", () => {
  document.body.classList.toggle("none-scroll");
  header.classList.toggle("header_active");
  burger.classList.toggle("burger_active");
});



if (popularSwiper) {
  new Swiper(".popular__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      992: {

        slidesPerView: 3
      },
      576: {

        slidesPerView: 2
      },

    }
  });
  popularSwiper.addEventListener("click", (event) => {
    const btn = event.target.closest(".popular__slide-btn")
    if (btn) {

      btn.classList.toggle("popular__slide-btn_active")
    }
  })
}