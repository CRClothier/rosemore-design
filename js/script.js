const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const autoRotate = true;
const intervalTime = 5000;
let slideInterval;

 const nextSlide = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
  const visible = document.querySelector('.visible');
  visible.classList.remove('visible');
  if (visible.nextElementSibling) {
    visible.nextElementSibling.classList.add('visible');
  } else {
    slides[0].classList.add('visible');
  }
 }

 const prevSlide = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
  const visible = document.querySelector('.visible');
  visible.classList.remove('visible');
  if (visible.previousElementSibling) {
    visible.previousElementSibling.classList.add('visible');
  } else {
    slides[slides.length - 1].classList.add('visible');
  }
 }

next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide);

if (autoRotate) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}