/*Back to Top Button */
document.addEventListener('DOMContentLoaded', function() {
  let backtotop = document.querySelector(".back-to-top");
  
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };

    window.addEventListener("scroll", toggleBacktotop);

    backtotop.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});