document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("leadPopup");
  const closeBtn = document.getElementById("closePopup");
  const form = popup.querySelector("form");
  const confirmation = popup.querySelector(".confirmation-message");

  let popupShown = false;

  // Show popup after user scrolls at least 100px
  function showPopupOnce() {
    if (popupShown) return;
    if (window.scrollY > 100) {
      popup.style.display = "flex";
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.style.opacity = "1";
      }, 50);
      popupShown = true;
    }
  }

  window.addEventListener("scroll", showPopupOnce);

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




  