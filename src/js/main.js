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
