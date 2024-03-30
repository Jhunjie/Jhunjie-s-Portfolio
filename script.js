ScrollReveal().reveal('.scroll-reveal', { delay: 300, interval: 200 });

let lastScrollTop = 0; 

window.addEventListener("scroll", function() { 
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
    
    if (currentScroll > lastScrollTop) { 
    document.getElementById("header").style.top = "-100px"; 
    } else { 
    document.getElementById("header").style.top = "0"; 
    } 
    lastScrollTop = currentScroll; 
});

document.addEventListener('DOMContentLoaded', function () {
    const imageContainerEl = document.querySelector('.image-container');
    const prevEl = document.getElementById('prev');
    const nextEl = document.getElementById('next');
    let currentRotation = 0;
    let timer;

    prevEl.addEventListener('click', () => {
        currentRotation -= 36;
        clearTimeout(timer);
        updateGallery();
    });

    nextEl.addEventListener('click', () => {
        currentRotation += 36;
        clearTimeout(timer);
        updateGallery();
    });

    function updateGallery() {
        imageContainerEl.style.transform = `perspective(1500px) rotateY(${currentRotation}deg)`;
        timer = setTimeout(() => {
            currentRotation += 36;
            updateGallery();
        }, 3000);
    }

    updateGallery();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log('Form data:', Object.fromEntries(formData));
    this.reset();
});
