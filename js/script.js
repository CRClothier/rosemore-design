const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const autoRotate = false;
const intervalTime = 5000;
let slideInterval;

 const nextSlide = () => {
  const visible = document.querySelector('.visible');
  visible.classList.remove('visible');
  if (visible.nextElementSibling) {
    visible.nextElementSibling.classList.add('visible');
  } else {
    slides[0].classList.add('visible');
  }
 }

 const prevSlide = () => {
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