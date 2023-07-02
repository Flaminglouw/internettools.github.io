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
showSlides(slideIndex); // Variable um aktuelle Folie zu folgen

function plusSlides(n) {
  showSlides((slideIndex += n)); // Schaltflächen für nächste oder vorherige Folie klickt
}

function currentSlide(n) {
  showSlides((slideIndex = n)); // // Punkte slideIndex of N und ruft showSlides auf.
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    // Überprüfung Folienindex n im gültigen Bereich der Folien liegt.
    slideIndex = 1; // Wenn n > Anzahl der Folie wird SlideIndex auf 1 gesetz.
  }
  if (n < 1) {
    slideIndex = slides.length; // wenn n < wird SlideIndex auf die Anzahl der Folien gesetz.
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // alle Folien ausgeblendet display none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Punkte inaktive ohne die Klasse "active"
  }
  slides[slideIndex - 1].style.display = "block"; // Folie wird angezeigt style.display = block
  dots[slideIndex - 1].className += " active"; // Punkte wird als aktive markiert Klasse active die className hinzufügen
}

// Automatic slideshow
function startSlideshow() {
  // funktion wird aufgerufen
  setInterval(function () {
    // setInterval Wechsel zwischen Folien zu steuern
    if (slideIndex === document.getElementsByClassName("mySlides").length) {
      setTimeout(function () {
        // Letze Folie Verzögerung
        plusSlides(1);
      }, 10000); // Show last slide for 10 seconds
    } else {
      plusSlides(1); // wenn nicht die letzte Folie
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

// Function to handle the intersection changes
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fly-in");
      observer.unobserve(entry.target);

      const overlayImage = document.querySelector(".overlay-image2");
      overlayImage.style.opacity = 1;
      overlayImage.style.animation = "delayedAppear 2.5s forwards";
    }
  });
}

// Create an intersection observer instance
const options = {
  threshold: 1, // Adjust the threshold as needed
  rootMargin: "0px 0px 0px 0px", // Add negative bottom margin to delay triggering
};

const observer = new IntersectionObserver(handleIntersection, options);

// Get the .fly element
const flyElement = document.querySelector(".fly");

// Delay observation by 1 second
setTimeout(() => {
  // Start observing the .fly element
  observer.observe(flyElement);
}, 1000); // 1000 milliseconds = 1 second
