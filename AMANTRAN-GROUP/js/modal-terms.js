document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("termsModal");
  const btn = document.getElementById("termsLink");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  };

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  });
});