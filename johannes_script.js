// Top Nav menu
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className.indexOf("responsive") === -1) {
    x.className += " responsive";
  } else {
    x.className = x.className.replace(" responsive", "");
  }
}
// Script for the slide show on the Homapage

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
function startSlideshow() {
  setInterval(function () {
    if (slideIndex === document.getElementsByClassName("mySlides").length) {
      setTimeout(function () {
        plusSlides(1);
      }, 10000); // Show last slide for 10 seconds
    } else {
      plusSlides(1);
    }
  }, 4000); // Change slide every 4 seconds
}

// Delay the start of the slideshow for the first slide
setTimeout(function () {
  startSlideshow();
}, 6000); // Start the slideshow after 6 seconds

// Menu of the restaurant Modul script//
const openModalButtons = document.querySelectorAll(".modalbutton");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-target");
    const modal = document.querySelector(modalId);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// date for placeholder

document.addEventListener("DOMContentLoaded", function () {
  // Code to set the default date value
  const dateInput = document.getElementById("dateInput");
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 16);
  dateInput.value = formattedDate;
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var offset = 1000; // Adjust the offset value here

  return (
    rect.top >= -offset &&
    rect.left >= -offset &&
    rect.bottom <=
      (window.innerHeight + offset ||
        document.documentElement.clientHeight + offset) &&
    rect.right <=
      (window.innerWidth + offset ||
        document.documentElement.clientWidth + offset)
  );
}

function handleScroll() {
  var flyContainer = document.querySelector(".fly");
  var secondImage = document.querySelector(".overlay-image2");

  if (window.innerWidth > 920 && isElementInViewport(flyContainer)) {
    setTimeout(function () {
      flyContainer.classList.add("animate-fly-in");
    }, 1000); // Add a 1-second delay

    setTimeout(function () {
      secondImage.classList.add("delayedAppear");
    }, 1000); // Add a 3-second delay for overlay-image2

    window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener
  }
}

// Add scroll event listener to trigger the animation
window.addEventListener("scroll", handleScroll);
