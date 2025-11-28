//form submission
document.getElementById("lead-form")
.addEventListener("submit",function(e) {
    e.preventDefault();
// get form values  
const firstname = this.elements[0].value;
const lastname = this.elements[1].value;
const email = this.elements[2].value;
const bestpicks  = this.elements[2].value

//in real scenario,you would send this data to a server
console.log("Lead Captured:") (firstname,lastname,email,bestpicks)

//show configuration
alert("Thank you for your interest! We will contact you shortly")

// Reset form
this.reset()

}
)

// show popup after 5 seconds 
setTimeout(function (){
document.getElementById("email-popup").style.display="flex"
},5000)

//close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("email-popup").style.display="none";

})

// close when clicking outside content  
document.getElementById("email-popup").addEventListener("click",function(e){
    if(e.target===this){
        this.style.display="none";
    }
});

// Hamburger Menu Functionality
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            // Optional: toggle hamburger icon
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
    }
});

// ==============================> Cookies <======================================
 
    function acceptCookies() {
    document.getElementById("cookie-banner").style.display="none";
    localStorage.setItem("cookiesAccepted", "true")
    localkAnalytics();//GA4
    }
   

function declineCookies() {
    document.getElementById("cookie-banner").style.display="none";
    localStorage.setItem("cookiesAccepted", "false")

    }
   
    // on page load,check past choice
    window.onload=function() {

        if(this.localStorage.getItem("cookiesAccepted")==="true"){
            loadAnalytics();
            document.getElementById("cookie-banner").style.display ="none";

           }else if(localStorage.getItem("cookiesAccepted")=="false"){
            document.getElementById("cookie-banner").style.display ="none";
           }
        }

document.addEventListener("DOMContentLoaded", function() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
});
        
        // footer Year //
       document.getElementById("year").textContent = new Date().getFullYear();

       
 
