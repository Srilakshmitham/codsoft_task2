// Menu Button Interaction
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle navigation links and update menu button icon
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Close navigation links when a link is clicked
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
});

// ScrollReveal Options
const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// ScrollReveal Instances
ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".header-content .section-description", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOptions,
    delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
    ...scrollRevealOptions,
    origin: "left",
});

ScrollReveal().reveal(".explore__content .section-header", {
    ...scrollRevealOptions,
    delay: 500,
});

// Remove duplicate selector for explore__content
ScrollReveal().reveal(".explore__content .section-description", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".explore__content .explore__btn", {
    ...scrollRevealOptions,
    delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
    ...scrollRevealOptions,
    interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
    ...scrollRevealOptions,
    origin: "right",
});

ScrollReveal().reveal(".chef__content .section-header", {
    ...scrollRevealOptions,
    delay: 500,
});

ScrollReveal().reveal(".chef__content .section-description", {
    ...scrollRevealOptions,
    delay: 1000,
});

ScrollReveal().reveal(".chef__list li", {
    ...scrollRevealOptions,
    delay: 1500,
    interval: 500,
});

// Swiper Initialization
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination", // Corrected the pagination element selector
        clickable: true,
    },
});


