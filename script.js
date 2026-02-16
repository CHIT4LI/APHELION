/* console.log("script start! please wait~");

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

  if (video) {
    video.play().catch(() => {
    });
  }
});

window.addEventListener('load', function() {
  const loader = document.getElementById('video-loader');
  const preloaderWrapper = document.getElementById('preloader-wrapper');
  const content = document.getElementById("myDiv"); || document.querySelector('.content');

  if (loader) loader.style.display = 'none';
  if (preloaderWrapper) preloaderWrapper.classList.add('hide-preloader');
  if (content) content.style.display = 'block';

  document.body.style.overflow = 'visible';
});

const video = document.getElementById("preloader-video");
  video.addEventListener("ended", () => {
    document.getElementById("preloader-wrapper").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  });
const preloader = document.getElementById('preloader-wrapper');
const content = document.getElementById("myDiv");

if (video) {
  video.addEventListener('canplaythrough', () => {
    preloader.classList.add('hide-preloader');
    content.style.display = 'block';
    document.body.style.overflow = 'visible';
  });
}

document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader-wrapper');
    const myDiv = document.getElementById('myDiv');

    
    setTimeout(() => {
        if(preloader) preloader.style.display = 'none';
        if(myDiv) myDiv.style.display = 'block';
    }, 2000);
});



console.log("javascript loaded! ok to continue~");

*/

document.addEventListener("DOMContentLoaded", function() {

  console.log("script start! please wait~");


  let slideIndex = 1;

  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length >= slideIndex) {
      dots[slideIndex - 1].className += " active";
    }
  }

  window.plusSlides = function(n) {
    showSlides(slideIndex += n);
  }

  window.currentSlide = function(n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);




  const video = document.getElementById("preloader-video");
  const preloader = document.getElementById("preloader-wrapper");
  const content = document.getElementById("myDiv");

  if (!video || !preloader || !content) return;

  function revealSite() {
    preloader.classList.add("hide-preloader");
    content.style.display = "block";
    document.body.style.overflow = "visible";
  }

  // If video fully buffers
  video.addEventListener("canplaythrough", () => {
    video.play().catch(() => {});
  });

  // When video finishes
  video.addEventListener("ended", revealSite);

  // Fallback: if video fails to load
  video.addEventListener("error", revealSite);

  // Absolute safety fallback (in case video never ends)
  setTimeout(revealSite, 8000);

  console.log("javascript loaded! ok to continue~");

});