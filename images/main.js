const slides = document.querySelector('.slide');

// set each slides translateX property to index * 100% 
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100} %)`;
});
