document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("leadPopup");
  const closeBtn = document.getElementById("closePopup");
  const form = popup.querySelector("form");
  const confirmation = popup.querySelector(".confirmation-message");

  // Show popup after delay
  setTimeout(() => {
    popup.style.display = "flex";
  }, 3000);

  // Close popup on X click
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
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



  