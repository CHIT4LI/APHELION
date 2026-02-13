console.log("script start! please wait~");
eruda.init()

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

  // Fade out and hide the loader
  loader.style.display = 'none';

  // Show the main content
  content.style.display = 'block';
  document.body.style.overflow = 'visible'; // Restore scrolling


document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('preloader-video');

  if (video) {
    video.play().catch(() => {
    });
  }
});

window.addEventListener('load', function() {
  const loader = document.getElementById('video-loader');
  const preloaderWrapper = document.getElementById('preloader-wrapper');
  const content = document.getElementById('content') || document.querySelector('.content');

  if (loader) loader.style.display = 'none';
  if (preloaderWrapper) preloaderWrapper.classList.add('hide-preloader');
  if (content) content.style.display = 'block';

  document.body.style.overflow = 'visible';
});

const video = document.getElementById('preloader-video');
const preloader = document.getElementById('preloader-wrapper');
const content = document.getElementById('content');

if (video) {
  video.addEventListener('canplaythrough', () => {
    preloader.classList.add('hide-preloader');
    content.style.display = 'block';
    document.body.style.overflow = 'visible';
  });
}

console.log("javascript loaded! ok to continue~");

