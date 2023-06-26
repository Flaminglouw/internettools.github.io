//Slideshow
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

//Button
window.addEventListener('scroll', function() {
  var scrollTopButton = document.querySelector('.scroll-top-button');
  if (window.pageYOffset > 300) {
    scrollTopButton.classList.add('active');
  } else {
    scrollTopButton.classList.remove('active');
  }
});

document.querySelector('.scroll-top-button').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

