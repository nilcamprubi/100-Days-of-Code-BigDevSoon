// Add your JavaScript here.
const carouselItems = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-items img').length;

function updateCarousel() {
  const width = document.querySelector('.carousel').offsetWidth;
  carouselItems.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

// Optional: Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}, 5000);

window.addEventListener('resize', updateCarousel);
