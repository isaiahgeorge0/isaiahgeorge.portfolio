document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("leadPopup");
  if (!popup) return;

  const closeBtn = document.getElementById("closePopup");
  const form = popup.querySelector("form");
  const confirmation = popup.querySelector(".confirmation-message");

  // Show popup shortly after page load (3s delay)
  window.addEventListener("load", () => {
    popup.classList.add("visible");
  });
  

  // Close popup on X click
  closeBtn?.addEventListener("click", () => {
    popup.classList.remove("visible");
  });

  // Handle form submission
  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        form.style.display = "none";
        confirmation.style.display = "block";
      })
      .catch((error) => {
        alert("Oops, something went wrong.");
        console.error(error);
      });
  });
});







  