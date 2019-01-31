const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
        menuBtn.classList.toggle("close");
        menu.classList.toggle("show");
        menuNav.classList.toggle("show");
        menuBranding.classList.toggle("show");
        navItems.forEach(item => item.classList.toggle("show"));
}

