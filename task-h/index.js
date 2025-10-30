// index.js
// Author: Vitus Wagensonner
// Date: 2025-10-30
// Handles custom validation and table row insertion


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCourseForm");
  const tableBody = document.querySelector("#timetable");

  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const birthInput = document.getElementById("birthDate");
  const termsInput = document.getElementById("terms");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const birthError = document.getElementById("birthError");
  const termsError = document.getElementById("termsError");

  // Helper validation functions
  function validateName(name) {
    return name.trim().length >= 2;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^\+?\d{7,15}$/.test(phone);
  }

  function validateBirth(date) {
    return date !== "";
  }

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    birthError.textContent = "";
    termsError.textContent = "";

    let valid = true;

    if (!validateName(nameInput.value)) {
      nameError.textContent = "Please enter your full name.";
      valid = false;
    }

    if (!validateEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (!validatePhone(phoneInput.value)) {
      phoneError.textContent = "Please enter a valid phone number.";
      valid = false;
    }

    if (!validateBirth(birthInput.value)) {
      birthError.textContent = "Please select your birth date.";
      valid = false;
    }

    if (!termsInput.checked) {
      termsError.textContent = "You must accept the terms.";
      valid = false;
    }

    if (!valid) return; // Stop here if invalid

    // Add new row to the table
    const row = document.createElement("tr");
    row.classList.add("odd:bg-white", "even:bg-slate-100"); // Tailwind row striping

    const timestamp = new Date().toLocaleString();

    row.innerHTML = `
      <td class="p-2">${timestamp}</td>
      <td class="p-2">${nameInput.value}</td>
      <td class="p-2">${emailInput.value}</td>
      <td class="p-2">${phoneInput.value}</td>
      <td class="p-2">${birthInput.value}</td>
      <td class="p-2 text-center">${termsInput.checked ? "✅" : "❌"}</td>
    `;

    tableBody.appendChild(row);

    // Reset form
    form.reset();
  });
});
