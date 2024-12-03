document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function changeSlide(direction) {
        slideIndex = (slideIndex + direction + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    // Auto-play slideshow
    function autoPlay() {
        changeSlide(1);
        setTimeout(autoPlay, 5000); // Change slide every 5 seconds
    }

    // Initial setup
    showSlide(slideIndex);
    autoPlay();

    // Button event listeners
    prevButton.addEventListener("click", () => changeSlide(-1));
    nextButton.addEventListener("click", () => changeSlide(1));
});
