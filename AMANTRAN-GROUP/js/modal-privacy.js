document.addEventListener('DOMContentLoaded', function() {
    const privacyModal = document.getElementById("privacyModal");
    const privacyBtn = document.getElementById("privacyLink");
    const privacyClose = privacyModal.getElementsByClassName("close")[0];
  
    privacyBtn.onclick = function(e) {
      e.preventDefault();
      privacyModal.style.display = "block";
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  
    privacyClose.onclick = function() {
      privacyModal.style.display = "none";
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  
    window.onclick = function(event) {
      if (event.target == privacyModal) {
        privacyModal.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling
      }
    }
  
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === "Escape" && privacyModal.style.display === "block") {
        privacyModal.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling
      }
    });
  });