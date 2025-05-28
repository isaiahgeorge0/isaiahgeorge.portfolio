// Enable animations only when JS is running
document.body.classList.add("js-enabled");

// Fade-in animation using IntersectionObserver
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach(section => observer.observe(section));

