'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector(".navbar");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("nav-active");
  document.body.classList.toggle("no-scroll");
});

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * about
 */

document.getElementById("read-more-btn").addEventListener("click", function () {
  const aboutText = document.getElementById("about-text");
  
  if (aboutText.classList.contains("expanded")) {
    aboutText.classList.remove("expanded");
    this.textContent = "Read More";
  } else {
    aboutText.classList.add("expanded");
    this.textContent = "Read Less";
  }
});




/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

