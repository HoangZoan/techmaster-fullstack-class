"use strict";

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const form = document.querySelector(".needs-validation");

// Loop over them and prevent submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    const formData = [...new FormData(form)];
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  form.classList.add("was-validated");
});

// SWIPER
const projectsSwiper = new Swiper(".student-projects-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#header-nav",
});
