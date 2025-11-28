// Form submission
document.getElementById("lead-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values  
    const firstname = this.elements[0]?.value;
    const lastname = this.elements[1]?.value;
    const email = this.elements[2]?.value;
    const bestpicks = this.elements[3]?.value;

    console.log("Lead Captured:", firstname, lastname, email, bestpicks);
    alert("Thank you for your interest! We will contact you shortly");
    this.reset();
});

// Popup functionality
setTimeout(function() {
    const popup = document.getElementById("email-popup");
    if (popup) popup.style.display = "flex";
}, 5000);

document.querySelector(".close-btn")?.addEventListener("click", function() {
    const popup = document.getElementById("email-popup");
    if (popup) popup.style.display = "none";
});

document.getElementById("email-popup")?.addEventListener("click", function(e) {
    if (e.target === this) this.style.display = "none";
});

// Cookie functions
function acceptCookies() {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
    if (typeof loadAnalytics === 'function') loadAnalytics();
}

function declineCookies() {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.style.display = "none";
    localStorage.setItem("cookiesAccepted", "false");
}

// Check cookies on load
window.addEventListener('load', function() {
    if (localStorage.getItem("cookiesAccepted") === "true") {
        if (typeof loadAnalytics === 'function') loadAnalytics();
        document.getElementById("cookie-banner").style.display = "none";
    } else if (localStorage.getItem("cookiesAccepted") === "false") {
        document.getElementById("cookie-banner").style.display = "none";
    }
});

// Hamburger Menu - SIMPLE VERSION
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
    }
    
    // Footer year
    const yearElement = document.getElementById("year");
    if (yearElement) yearElement.textContent = new Date().getFullYear();
});

// Slider functionality
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
    
    setTimeout(showSlides, 3500);
}

// Initialize when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showSlides);
} else {
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
