let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Background toggle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

//Phone mode toggle
function phoneMode() {
  var theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == 'css/style.css') {
    theme.setAttribute('href', 'css/phone.css');
} else {
    theme.setAttribute('href', 'css/style.css');
}
}
