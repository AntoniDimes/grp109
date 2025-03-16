const images = [ // Array of images (Gurkirat)
  { src: "image/keyboards.png", alt: "Image of a keyboard" },
  { src: "image/keyboards2.png", alt: "Image of a keyboard" },
  { src: "image/keyboards4.png", alt: "Image of a keyboard" },
  { src: "image/keyboards5.png", alt: "Image of a keyboard" },
  { src: "image/keyboards6.png", alt: "Image of a keyboard" },
  { src: "image/keyboards7.png", alt: "Image of a keyboard" }
];

let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');
const elapsedTimeDisplay = document.getElementById("elapsed-time"); // Get the timer display
let timeLeft = 3; 

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
  timeLeft = 3;
}

// Function to go to the previous slide (Buu)
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateCarousel();
  timeLeft = 3;
}

// Auto-slide every 3 seconds (Buu)
function startAutoSlide() {
  setInterval(() => {
    nextSlide();
  }, 3000);
}

// Function to count the time (Duy)
function updateTimer() {
  timeLeft--; // Decrease time by 1 second
  elapsedTimeDisplay.textContent = timeLeft; // Update display

  if (timeLeft === 0) {
    nextSlide();
  }
}

// Event listeners for buttons (Buu)
document.querySelector('.prev').addEventListener('click', function() {
  prevSlide();
  // Play the sound when advanced clicked (Duy)
  rewindSound.play();
});

document.querySelector('.next').addEventListener('click', function() {
  nextSlide();
  // Play the sound when rewind clicked (Duy)
  advanceSound.play();
});

// Automatically start the carousel and the timer when the page loads
startAutoSlide();
updateCarousel();
// Start the countdown timer (Duy)
setInterval(updateTimer, 1000); 

