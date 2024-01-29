// Menu icone nav bar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// sticky nav bar scroll selection active

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){

            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });

        };
    });
// sticky nav bar

let header=document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);

// remove menu icon navbar when click the nav bar link(scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


// swiper js


// #Dark light mode icon

let darkModeIcon=document.querySelector('#darkMode-icon');
darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


// Scroll reveal

ScrollReveal({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .about-img img, .skills-container, .portfolio-box, .testimonial-wrapper,contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about-content', { origin: 'left' });

ScrollReveal().reveal('.home-content h3,.home-content p,.about-content p', { origin: 'right' });
