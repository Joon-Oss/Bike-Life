// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Toggle display style for dropdown effect
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex'; // Show the menu
    } else {
        navLinks.style.display = 'none'; // Hide the menu
    }
});

// Close the menu when a link is clicked
navLinks.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    navLinks.style.display = 'none'; // Hide the menu
});

// Smooth scrolling for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close the menu after clicking a link
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navLinks.style.display = 'none'; // Hide the menu
    });
});

// Optional: Add an event listener for the window to close the menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        navLinks.style.display = 'flex'; // Show the menu on larger screens
    } else {
        navLinks.style.display = 'none'; // Hide the menu on smaller screens
    }
});
