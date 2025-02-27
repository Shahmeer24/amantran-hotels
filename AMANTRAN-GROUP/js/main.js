/*Copyright Year Update*/
document.addEventListener("DOMContentLoaded", function () {
  const copyrightElement = document.getElementById("copyright");
  const currentYear = new Date().getFullYear();
  copyrightElement.innerHTML = `&copy; ${currentYear} Amantran Group. All rights reserved.`;
});


/*Book Now Confirm Button*/
function confirmFunction() {
  const text =
    "You will be redirected to our booking manager in WhatsApp.\nPress OK to continue.";
  const externalLink = "https://wa.link/nkki2m"; //WhatsApp Contact Link
  if (confirm(text) == true) {
    window.location.href = externalLink;
  } else {
  }
}


/* Scroll Reveal Script */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", reveal);

  function reveal() {
    var sections = document.querySelectorAll("section");

    for (var i = 0; i < sections.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = sections[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add("active");
      } else {
        sections[i].classList.remove("active");
      }
    }
  }
  reveal();
});