console.log("script start! please wait~");

document.addEventListener("DOMContentLoaded", function() {


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