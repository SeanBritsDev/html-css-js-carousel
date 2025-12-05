let slideIndex = 1;
let autoTimer = null;
const AUTO_INTERVAL = 5000; // 5 seconds

function showSlides(n) {
  const slideshow = document.getElementById("autoSlideshow");
  if (!slideshow) return;

  const slides = slideshow.getElementsByClassName("slides");
  const dots = slideshow.getElementsByClassName("dot");
  const total = slides.length;

  if (total === 0) return;

  if (n > total) slideIndex = 1;
  if (n < 1) slideIndex = total;

  for (let i = 0; i < total; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  slides[slideIndex - 1].classList.add("active");
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active-dot");
  }
}

function plusSlides(n) {
  clearInterval(autoTimer);
  showSlides((slideIndex += n));
  startAuto();
}

function currentSlide(n) {
  clearInterval(autoTimer);
  showSlides((slideIndex = n));
  startAuto();
}

function startAuto() {
  autoTimer = setInterval(function () {
    showSlides(++slideIndex);
  }, AUTO_INTERVAL);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  startAuto();
});
