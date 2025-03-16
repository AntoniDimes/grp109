const images = [ // Array of images (gurkirat)
  { src: "image/keyboards.png", alt: "Image of a keyboard" },
  { src: "image/keyboards2.png", alt: "Image of a keyboard" },
  { src: "image/keyboards4.png", alt: "Image of a keyboard" },
  { src: "image/keyboards5.png", alt: "Image of a keyboard" },
  { src: "image/keyboards6.png", alt: "Image of a keyboard" },
  { src: "image/keyboards7.png", alt: "Image of a keyboard" }
];

// (Buu)
let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');

// Create audio elements (Duy)
const rewindSound = new Audio("https://antonidimes.github.io/grp109/team_project/sounds/old-radio-button-click-97549.mp3");
const advanceSound = new Audio("https://antonidimes.github.io/grp109/team_project/sounds/minecraft_click.mp3");

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
  updateCarousel();
}

// Auto-slide every 3 seconds (Buu)
function startAutoSlide() {
  setInterval(nextSlide, 3000); 
}

// Event listeners for buttons (Buu)
document.querySelector('.prev').addEventListener('click', function() {
  prevSlide();
  // Play the rewind sound (Duy)
  rewindSound.play(); 
});

document.querySelector('.next').addEventListener('click', function() {
  nextSlide();
  // Play the advanced sound (Duy)
  advanceSound.play(); 
});

// Automatically start the carousel when the page loads (Buu)
startAutoSlide();
updateCarousel();


