// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuBtn.innerHTML = mobileMenu.classList.contains('active') 
        ? '<i class="fa fa-times"></i>' 
        : '<i class="fa fa-bars"></i>';
});

// Navbar Active State
const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Smooth Scroll
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu
        if(mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
        }
    });
});

// Form Submit
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully! Thank you for contacting me.');
    this.reset();
});

// Scroll Spy
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});