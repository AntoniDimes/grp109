const images = [ // Array of images (gurkirat)
  { src: "image/keyboards.png", alt: "Image of a keyboard" },
  { src: "image/keyboards2.png", alt: "Image of a keyboard" },
  { src: "image/keyboards4.png", alt: "Image of a keyboard" },
  { src: "image/keyboards5.png", alt: "Image of a keyboard" },
  { src: "image/keyboards6.png", alt: "Image of a keyboard" },
  { src: "image/keyboards7.png", alt: "Image of a keyboard" }
];

//(Buu)
let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');

// Function to update the carousel position (Buu)
function updateCarousel() {
  const imageWidth = document.querySelector('.carousel-images img').clientWidth;  
  const offset = -currentIndex * imageWidth; 
  carouselImages.style.transform = `translateX(${offset}px)`; 
}

// Function to go to the next slide (Buu)
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;  
  updateCarousel();
}

// Function to go to the previous slide (Buu)
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
}

// Auto-slide every 4 seconds (Buu)
function startAutoSlide() {
  setInterval(nextSlide, 4000); 
}

// Event listeners for buttons (Buu)
document.querySelector('.prev').addEventListener('click', function() {
  prevSlide();
});
document.querySelector('.next').addEventListener('click', function() {
  nextSlide();
});

// Automatically start the carousel when the page loads (Buu)
startAutoSlide();
updateCarousel();
