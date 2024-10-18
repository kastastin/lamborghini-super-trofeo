const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu_open");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-left",
    prevEl: ".swiper-button-right",
  },
});
