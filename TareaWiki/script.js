let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}