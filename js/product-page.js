document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".advantages-list");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const cardWidth = document.querySelector(".advantages-card").offsetWidth + 20;

  let currentIndex = 0;

  function updateSlider() {
    const offset = -cardWidth * currentIndex;
    slider.style.transform = `translateX(${offset}px)`;
  }

  leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  })

  rightBtn.addEventListener("click", () => {
    if (currentIndex < slider.children.length - 3) {
      currentIndex++;
      updateSlider();
    }
  })

  updateSlider();
})
