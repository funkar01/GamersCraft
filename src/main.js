// GamersCraft Main Script

console.log('GamersCraft loaded!');

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });
}

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Glitch Effect Randomizer (Optional polish)
const glitchText = document.querySelector('.glitch');
if (glitchText) {
    setInterval(() => {
        glitchText.classList.add('active');
        setTimeout(() => {
            glitchText.classList.remove('active');
        }, 200);
    }, 3000);
}
