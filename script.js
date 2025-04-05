// Testimonial Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.testimonial-container');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const intervalTime = 3000; // 3 seconds

    function updateSlider() {
        const slideWidth = cards[0].clientWidth; // Calculate width dynamically
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % cards.length; // Loop to the first card if last reached
        updateSlider();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to the last card if first reached
        updateSlider();
    }

    nextBtn.addEventListener('click', goToNext);
    prevBtn.addEventListener('click', goToPrev);

    // Auto-slide function
    let autoSlide = setInterval(goToNext, intervalTime);

    // Pause auto-slide when hovering over the slider
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    // Resume auto-slide when not hovering over the slider
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(goToNext, intervalTime);
    });

    // Ensure slider stays responsive
    window.addEventListener('resize', updateSlider);
});

// Navigation Highlight Functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.list-items a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#f9a825'; // Highlight color for active page
            link.style.fontWeight = 'bold';
        }
    });
});
