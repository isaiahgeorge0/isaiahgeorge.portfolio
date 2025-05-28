// In mobile-nav.js
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


