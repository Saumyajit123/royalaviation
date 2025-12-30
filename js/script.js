const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
});

 AOS.init({
  once: false,
 });

const firstSwiper = new Swiper(".firstSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  // centeredSlides: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
