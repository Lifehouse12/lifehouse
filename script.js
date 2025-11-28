// Form submission
document.getElementById("lead-form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form values  
    const firstname = this.elements[0].value;
    const lastname = this.elements[1].value;
    const email = this.elements[2].value;
    const bestpicks = this.elements[3].value; // Fixed index from 2 to 3

    // In real scenario, you would send this data to a server
    console.log("Lead Captured:", firstname, lastname, email, bestpicks); // Fixed syntax

    // Show confirmation
    alert("Thank you for your interest! We will contact you shortly");

    // Reset form
    this.reset();
});

// Show popup after 5 seconds 
setTimeout(function() {
    const popup = document.getElementById("email-popup");
    if (popup) {
        popup.style.display = "flex";
    }
}, 5000);

// Close popup when X is clicked
document.querySelector(".close-btn")?.addEventListener("click", function() {
    const popup = document.getElementById("email-popup");
    if (popup) {
        popup.style.display = "none";
    }
});

// Close when clicking outside content  
document.getElementById("email-popup")?.addEventListener("click", function(e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});

// ==============================> Cookies <======================================
function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
    loadAnalytics(); // GA4 - Fixed typo from localkAnalytics
}

function declineCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "false");
}

// On page load, check past choice
window.onload = function() {
    if (localStorage.getItem("cookiesAccepted") === "true") {
        loadAnalytics();
        document.getElementById("cookie-banner").style.display = "none";
    } else if (localStorage.getItem("cookiesAccepted") === "false") {
        document.getElementById("cookie-banner").style.display = "none";
    }
    // If no choice made, banner remains visible
}

// Hamburger Menu Functionality - SINGLE VERSION (removed duplicate)
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            // Toggle hamburger icon
            this.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                hamburger.textContent = '☰';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburger.textContent = '☰';
            }
        });
    }

    // Footer Year
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Slider functionality (if not already in your HTML)
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    setTimeout(showSlides, 3500);
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
