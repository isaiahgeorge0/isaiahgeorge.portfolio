// Add class to enable scroll-based animations
document.body.classList.add("js-enabled");

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.15 // Start fading when ~15% visible
});

sections.forEach(section => {
  observer.observe(section);
});

