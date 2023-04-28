const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// navbar indication change during scroll

window.addEventListener("scroll", () => {
  for (let sec of sections) {
    let top = window.scrollY;

    let offset = sec.offsetTop - 150;

    let height = sec.offsetHeight;

    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  }
});

// border-bottom highlight during scroll

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

    //remove nav when clicked on links

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("slide");
});

//responsive nav

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("slide");
});


//scroll reveal

ScrollReveal({ 
    //reset: true,
    distance:'60px',
    duration:2000,
    delay:200
 });

ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
ScrollReveal().reveal('.heading, .home-content', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });

//type script

var typed = new Typed('.auto-type', {
    strings: ['Front-End Developer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });