//Page loading animation

function hideLoader() {
    var loader = document.getElementById("hideElement");
    loader.classList.add("fade-out");
    setTimeout(function () {
      loader.remove();
      document.body.style.overflow = 'auto'; 
    }, 1000);
  }
  
  function onPageLoad() {
    setTimeout(hideLoader, 1000);
  }
  
  window.addEventListener("load", onPageLoad);
  