document.addEventListener("DOMContentLoaded", function () {
    let header = document.getElementById("header");
    
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY === 0) {
                header.classList.remove("full-opacity");
            } else {
                header.classList.add("full-opacity");
            }
        });
    }
});


let slides = document.querySelectorAll('.slide');
let dotLinks = document.querySelectorAll('.dot-link');
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let currentSlideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.zIndex = slides.length; // Bring the current slide to the front
      slide.classList.add('show');
    } else {
      slide.style.zIndex = 0; // Send other slides to the back
      slide.classList.remove('show');
    }
  });
}

function showNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateDots();
  showSlide(currentSlideIndex);
}

function showPrevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateDots();
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  updateDots();
  showSlide(currentSlideIndex);
}

function updateDots() {
  dotLinks.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlideIndex);
  });
}

function startAutoSlide() {
  return setInterval(() => {
    showNextSlide();
  }, 5000); // Change slide every 5000 milliseconds (adjust as needed)
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = startAutoSlide();
}

prevButton.addEventListener('click', () => {
  resetAutoSlide();
  showPrevSlide();
});

nextButton.addEventListener('click', () => {
  resetAutoSlide();
  showNextSlide();
});

// Attach click event listeners to dot links
dotLinks.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    resetAutoSlide();
    currentSlide(i + 1);
  });
});

// Initial display
showSlide(currentSlideIndex);

// Start the auto slide timer
autoSlideInterval = startAutoSlide();

