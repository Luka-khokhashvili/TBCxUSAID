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


document.addEventListener('DOMContentLoaded', function () {
    // Get all question elements
    
});

document.addEventListener('DOMContentLoaded', function () {
  // Get all question elements
  let questionDivs = document.querySelectorAll('.question-div');
  
  // Add click event listener to each question
  questionDivs.forEach(function (questionDiv) {
    let questionNameDiv = questionDiv.querySelector('.question-name-div');
    let questionBody = questionDiv.querySelector('.question-body');
    let arrowSvg = questionDiv.querySelector('.arrow-svg'); // Corrected placement

      // Add click event listener to questionNameDiv
      questionNameDiv.addEventListener('click', function () {
          // Close other open question bodies
          closeOtherQuestionBodies(questionDivs, questionDiv);

          // Toggle visibility of the current question body
          questionDiv.classList.toggle('show');
          arrowSvg.classList.toggle('arrow-up'); // Corrected toggle
      });
  });

  function closeOtherQuestionBodies(questionDivs, currentQuestionDiv) {
      questionDivs.forEach(function (questionDiv) {
          if (questionDiv !== currentQuestionDiv && questionDiv.classList.contains('show')) {
              questionDiv.classList.remove('show');
              // Also remove the arrow-up class from the arrow in the closed question
              questionDiv.querySelector('.arrow-svg').classList.remove('arrow-up');
          }
      });
  }
});

//JavaScript
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burgerLinks = document.querySelector('.burger-links');
  const content = document.querySelector('.content');

  // Ensure elements exist before manipulating them
  if (navbar && burgerLinks && content) {
    navbar.classList.toggle('menu-open');

    // Check if menu is open
    const isOpen = navbar.classList.contains('menu-open');

    // Adjust brightness of background content
    if (isOpen) {
      content.classList.add('dimmed');
    } else {
      content.classList.remove('dimmed');
    }
  } else {
    console.error('One or more elements not found.');
  }
}

