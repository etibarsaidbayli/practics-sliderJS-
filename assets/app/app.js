let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");

nextBtn.addEventListener("click", showNextImages);

function showNextImages() {
  if (offset >= 1024) {
    offset = -256;
  }
  offset += 256;
  sliderLine.style.left = -offset + "px";
}

prevBtn.addEventListener("click", showPrevImages);

function showPrevImages() {
  if (offset <= 0) {
    offset = 1280;
  }
  offset -= 256;
  sliderLine.style.left = -offset + "px";
}
