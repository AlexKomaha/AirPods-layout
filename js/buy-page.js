const colorBtns = document.querySelectorAll(".color-btn");
const selectedImage = document.querySelectorAll(".selected-image");

colorBtns.forEach(function (element) {
  element.addEventListener("click", open)
})

function open(evt) {
  const target = evt.currentTarget;
  const color = target.dataset.color;

  colorBtns.forEach(function(item) {
    item.classList.remove("color-btn__active");
  });

  target.classList.add("color-btn__active");

  selectedImage.forEach(function(item) {
    item.classList.remove("selected-image__active");
  });

  const activeImage = document.querySelector(`.selected-image[data-color="${color}"]`);
  if (activeImage) {
    activeImage.classList.add("selected-image__active");
  }
}
