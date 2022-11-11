const slides = document.querySelectorAll('.slide');
  console.log(slides)
slides.forEach((slide, value) => {
  slide.getElementsByClassName.transform = `translateX(${value * 100}%)`;
});

const nextSlide = document.querySelector('.btn-next');
let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener('click', () => {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, value) => {
  slide.style.transform = `translateX(${100 * (value - curSlide)}%)`;
});
});

const prevSlide = document.querySelector('.btn-prev');
prevSlide.addEventListener('click', () => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  slides.forEach((slide, value) => {
    slide.style.transform = `translateX(${100 * (value - curSlide)}%)`;
  });
});
console.log(nextSlide)
    