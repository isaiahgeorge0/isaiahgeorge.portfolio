const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation-message");

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      confirmation.style.display = "block";
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Oops! Something went wrong.");
    });
});

