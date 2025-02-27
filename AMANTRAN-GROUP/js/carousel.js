/*Carousel Script*/
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}
setInterval(() => changeSlide(1), 3000);

/*Reviews Carousel Script*/
document.addEventListener("DOMContentLoaded", function () {
  const reviewGrid = document.querySelector(".review-grid");
  const reviewCards = document.querySelectorAll(".review-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const cardWidth = reviewCards[0].offsetWidth;
  const totalCards = reviewCards.length;

  function updateCarousel() {
    reviewGrid.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updateButtonStates();
  }

  function updateButtonStates() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalCards - 1;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  updateButtonStates();

  let touchStartX = 0;
  let touchEndX = 0;

  reviewGrid.addEventListener(
    "touchstart",
    function (e) {
      touchStartX = e.changedTouches[0].screenX;
    },
    false
  );

  reviewGrid.addEventListener(
    "touchend",
    function (e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    if (touchEndX < touchStartX) {
      // Swipe left
      if (currentIndex < totalCards - 1) {
        currentIndex++;
        updateCarousel();
      }
    }
    if (touchEndX > touchStartX) {
      // Swipe right
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" && currentIndex < totalCards - 1) {
      currentIndex++;
      updateCarousel();
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
});
