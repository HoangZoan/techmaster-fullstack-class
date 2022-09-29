"use strict";

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const form = document.querySelector(".needs-validation");
const successAlert = document.getElementById("form-alert-success");
const dangerAlert = document.getElementById("form-alert-danger");

const closeAlert = () => {
  successAlert.classList.remove("d-none");
  dangerAlert.classList.remove("d-none");
};

// Loop over them and prevent submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    event.stopPropagation();
  } else {
    const formData = [...new FormData(form)];
    const { email, fullName, note, phone } = Object.fromEntries(formData);
    const data = {
      FullName: fullName,
      Email: email,
      Phone: phone,
      Info: note,
      Link: window.location.href,
      ItemId: "n7zUXBgO",
    };

    fetch("https://techmaster.vn/submit-advisory", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        closeAlert();
        successAlert.classList.add("d-flex");
      })
      .catch((err) => {
        closeAlert();
        dangerAlert.classList.add("d-flex");
      });
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

const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 1,
  spaceBetween: 48,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
