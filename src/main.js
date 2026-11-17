
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// AUTOMATIC FOOTER YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
