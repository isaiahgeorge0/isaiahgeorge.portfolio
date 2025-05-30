document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("leadPopup");
  if (!popup) return; // Fail silently if popup not found

  const closeBtn = document.getElementById("closePopup");
  const form = popup.querySelector("form");
  const confirmation = popup.querySelector(".confirmation-message");

  let popupShown = false;

  function showPopupOnce() {
    if (popupShown || !popup) return;
    if (window.scrollY > 1000) {
      popup.classList.add("visible");
      popupShown = true;
    }
  }

  window.addEventListener("scroll", showPopupOnce);

  closeBtn?.addEventListener("click", () => {
    popup.classList.remove("visible");
  });

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






  