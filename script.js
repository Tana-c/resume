function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
    const links = document.querySelectorAll('.navbar a:not(.menu-icon)');
    if (navbar.classList.contains('open')) {
        links.forEach(link => {
            link.style.animation = 'slideIn 0.5s ease forwards';
        });
    } else {
        links.forEach(link => {
            link.style.animation = 'none';
        });
    }
}
