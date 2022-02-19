const slideContainer = document.querySelector(".slide-container");
const leftSlide = document.querySelector(".left");
const rightSlide = document.querySelector(".right");
const slide = document.querySelector(".slide");
const scrollWidth = slide.clientWidth;
rightSlide.addEventListener("click", () => {
  slideContainer.scrollBy(scrollWidth, 0);
});
leftSlide.addEventListener("click", () => {
  slideContainer.scrollBy(-scrollWidth, 0);
});
