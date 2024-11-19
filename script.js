// Mobile menu toggle for the hamburger menu
const menuToggle = document.getElementById('menu-toggle');
const hamburgerLines = document.querySelectorAll('.hamburger-lines .line');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        hamburgerLines.forEach(line => line.classList.add('active'));
        menuItems.classList.add('active');
    } else {
        hamburgerLines.forEach(line => line.classList.remove('active'));
        menuItems.classList.remove('active');
    }
});
