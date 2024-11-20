document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".advantages-list");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  const cardWidth = document.querySelector(".advantages-card").offsetWidth + 20;

  let currentIndex = 0;

  function updateSlider() {
    const offset = -cardWidth * currentIndex;
    slider.style.transform = `translateX(${offset}px)`;


  // Manage button classes

  if (currentIndex === 0) {
    leftBtn.classList.add("inactive");
    rightBtn.classList.remove("inactive");
    leftBtn.classList.remove("active");
    rightBtn.classList.add("active");
  } else if (currentIndex === slider.children.length - 3) {
    leftBtn.classList.remove("inactive");
    rightBtn.classList.add("inactive");
    leftBtn.classList.add("active");
    rightBtn.classList.remove("active");
  } else {
    leftBtn.classList.remove("inactive");
    rightBtn.classList.remove("inactive");
    leftBtn.classList.add("active");
    rightBtn.classList.add("active");
  }
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
