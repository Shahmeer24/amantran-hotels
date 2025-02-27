document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; 

  const startCounter = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".counter");
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
            // counter.innerText += '+';
          };

          updateCount();
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(startCounter, {
    root: null,
    threshold: 0.1,
  });

  const counterSection = document.querySelector(".counters");
  if (counterSection) {
    observer.observe(counterSection);
  }
});
