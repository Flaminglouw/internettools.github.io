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
const openModalButtons = document.querySelectorAll(".modalbutton"); // Konstante ruft Elementen mit der Klasse modalbutton auf.
const closeModalButtons = document.querySelectorAll("[data-close-button]"); // Konstante ruft Attribut data-close button aus dem DOM auf. Object Model (Dokumentenobjektmodell)
const overlay = document.getElementById("overlay"); // Konstante Element ID overlay

openModalButtons.forEach((button) => {
  // forEach-Schleife alle Elmente in openModalbuttons zu iterieren.
  button.addEventListener("click", () => {
    // Klick event reagieren
    const modalId = button.getAttribute("data-modal-target"); // wert durch klicken von data-modal-target abgerufen.
    const modal = document.querySelector(modalId); // document.querySelector Modal Element anhand seine ID in Konstante modal gespeichert.
    openModal(modal); // Funktion openModal open Modal-Element und CSS Klasse
  });
});

overlay.addEventListener("click", () => {
  // EventListener für Klick-Event- sollen alle aktiven Modal-Elemente geschlossen werden.
  const modals = document.querySelectorAll(".modal.active"); // alle Elmenten Klasse modal und active in Konsante modals gespeichert-Aktive FENSTER
  modals.forEach((modal) => {
    // forEach -Loop Schleife alle AKTIVEN Elementen zu iterieren.
    closeModal(modal); // Modal ausgeblendet CSS Klasse wird entfernt
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
  modal.classList.add("active"); // füght die Klasse active zu and aktivieren den Modal
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active"); // Klasse active wird entfernen
  overlay.classList.remove("active");
}

// date for placeholder

document.addEventListener("DOMContentLoaded", function () {
  // EventListerer das DOM Ereignis hört. HTML vollständig geladen ist und bereit ist zu manipulieren.
  // Code to set the default date value
  const dateInput = document.getElementById("dateInput"); // Eingabefeld mit ID "dateInput" wird abgerufen und in Konstante gespeicher
  const currentDate = new Date(); // Neues Date-Objekt mit aktuellem Datum wird erstellt.
  const formattedDate = currentDate.toISOString().slice(0, 16); // Aktuelles Datum wird in formatierten String umgewandelt. Slice let me extract a portion of the sting
  dateInput.value = formattedDate; // Formatierter Datumswert wird dem Eingabefeld zugewiesen.
});

// Function to handle the intersection changes
function handleIntersection(entries, observer) {
  //  Funktion, die aufgerufen wird, wenn der Zustand der Intersection-Veränderungen erfasst wird.
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Überprüft, ob das Element sichtbar (intersecting) ist.
      entry.target.classList.add("animate-fly-in"); //  Fügt dem Element eine CSS-Klasse hinzu, um eine animierte Einflugbewegung zu starten.
      observer.unobserve(entry.target); //  Stoppt die Beobachtung des Elements durch den Intersection Observer.

      const overlayImage = document.querySelector(".overlay-image2"); // Ruft das Element mit der Klasse ".overlay-image2" ab.
      overlayImage.style.opacity = 1; //  Setzt die Opazität des Elements auf 1, um es sichtbar zu machen.
      overlayImage.style.animation = "delayedAppear 2.5s forwards"; // Weist dem Element eine CSS-Animation zu, die nach einer Verzögerung von 2,5 Sekunden startet.
    }
  });
}

// Create an intersection observer instance
const options = {
  //  Optionen für den Intersection Observer, z. B. die Schwelle und die rootMargin.
  threshold: 1, // Adjust the threshold as needed
  rootMargin: "0px 0px 0px 0px", // Add negative bottom margin to delay triggering
};

const observer = new IntersectionObserver(handleIntersection, options); // Erstellt eine Instanz des Intersection Observers mit der angegebenen Callback-Funktion und Optionen.

// Get the .fly element
const flyElement = document.querySelector(".fly");

// Delay observation by 1 second
setTimeout(() => {
  // Start observing the .fly element
  observer.observe(flyElement);
}, 1000); // 1000 milliseconds = 1 second
