window.addEventListener("load", () => {
  // Force scroll to top before showing the popup
  window.scrollTo(0, 0);

  const popup = document.getElementById("leadPopup");
  const closeBtn = document.getElementById("closePopup");
  const form = popup?.querySelector("form");
  const confirmation = popup?.querySelector(".confirmation-message");

  // Show popup as soon as everything has loaded
  if (popup) {
    popup.classList.add("visible");
  }

  // Close popup when user clicks the "×"
  closeBtn?.addEventListener("click", () => {
    popup.classList.remove("visible");
  });

  // Handle email form submission
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
        if (confirmation) {
          confirmation.style.display = "block";
        }
      })
      .catch((error) => {
        alert("Oops, something went wrong.");
        console.error(error);
      });
  });
});








  