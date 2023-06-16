let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].style.display = 'none';
  slides[index].style.display = 'block';
  currentSlide = index;
}

function nextSlide() {
  let newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

setInterval(nextSlide, 5000); // Wechselt alle 5 Sekunden zum nächsten Bild

showSlide(0); // Zeige das erste Bild an

