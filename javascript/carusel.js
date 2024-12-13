function startCarousel(className) {
    let index = 0;
    const slides = document.getElementsByClassName(className);

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      index++;
      if (index > slides.length) { index = 1; }
      slides[index - 1].style.display = "block";
      setTimeout(showSlides, 2500); // Schimbare slide la fiecare 2.5 secunde
    }

    showSlides();
  }

  document.addEventListener("DOMContentLoaded", () => {
    startCarousel("art");
    startCarousel("travel");
    startCarousel("sports");
    startCarousel("projects");
  });