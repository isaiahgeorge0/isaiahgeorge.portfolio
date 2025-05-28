// Add class to enable scroll-based animations
document.documentElement.classList.add("js-enabled"); // adds class to <html>

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

