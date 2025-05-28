// Fade-in animation using IntersectionObserver
const sections = document.querySelectorAll("section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Optional: fade only once
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}
