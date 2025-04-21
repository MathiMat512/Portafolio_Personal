const images1 = document.querySelectorAll('.carousel-section')[0].querySelector('.carousel-images');
const prevButton1 = document.getElementById('prev');
const nextButton1 = document.getElementById('next');
const totalImages1 = images1.querySelectorAll('img').length;
let currentIndex1 = 0;

function updateCarousel1() {
  images1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

prevButton1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : totalImages1 - 1;
  updateCarousel1();
});

nextButton1.addEventListener('click', () => {
  currentIndex1 = (currentIndex1 < totalImages1 - 1) ? currentIndex1 + 1 : 0;
  updateCarousel1();
});

const images2 = document.querySelectorAll('.carousel-section')[1].querySelector('.carousel-images');
const prevButton2 = document.getElementById('prev1');
const nextButton2 = document.getElementById('next1');
const totalImages2 = images2.querySelectorAll('img').length;
let currentIndex2 = 0;

function updateCarousel2() {
  images2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

prevButton2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : totalImages2 - 1;
  updateCarousel2();
});

nextButton2.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 < totalImages2 - 1) ? currentIndex2 + 1 : 0;
  updateCarousel2();
});
