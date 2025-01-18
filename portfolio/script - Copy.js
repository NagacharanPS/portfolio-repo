function toggleMenu(){
    const menu = document.querySelector(".menu-links"); // Corrected selector
    const icon = document.querySelector(".hamburger-icon"); // Corrected selector
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
