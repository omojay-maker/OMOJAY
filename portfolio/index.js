// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Here you can add your form handling logic (e.g., sending data to a server)
    alert('Thank you for your message! I will get back to you soon.');
    form.reset(); // Reset the form fields
});

// Header Animation
anime({
    targets: 'header',
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 1000,
    easing: 'easeInOutQuad'
});

// Project Images Animation
const projectImages = document.querySelectorAll('.project-gallery img');
projectImages.forEach((img, index) => {
    img.style.opacity = 0; // Set initial opacity to 0
    anime({
        targets: img,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        delay: index * 200, // Stagger the animations
        easing: 'easeInOutQuad'
    });
});