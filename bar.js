
// carusel //
const slides = document.querySelectorAll('.carusel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function previousSlide() {
  showSlide((currentSlide - 2 + slides.length) % slides.length);
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);







