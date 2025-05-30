window.addEventListener("load", () => {
  // Only show the popup if not dismissed before
  if (localStorage.getItem("popupDismissed") === "true") return;

  window.scrollTo(0, 0);
  const popup = document.getElementById("leadPopup");
  const closeBtn = document.getElementById("closePopup");
  const form = popup?.querySelector("form");
  const confirmation = popup?.querySelector(".confirmation-message");

  if (popup) {
    popup.classList.add("visible");
  }

  closeBtn?.addEventListener("click", () => {
    popup.classList.remove("visible");
    localStorage.setItem("popupDismissed", "true");
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









  