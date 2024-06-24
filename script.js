const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('current');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('current');
}

setInterval(nextSlide, 5000);