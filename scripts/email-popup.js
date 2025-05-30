document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("emailPopup");
    const closeBtn = document.getElementById("closePopup");
  
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1500); // Show after 1.5 seconds
  
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    document.getElementById("popupForm").addEventListener("submit", function (e) {
      e.preventDefault();
      // You could integrate Formspree or Netlify forms here
      popup.innerHTML = "<p>Thank you for subscribing!</p>";
    });
  });
  