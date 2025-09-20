fetch('/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        mobileMenuToggle(); // Initialize mobile menu toggle after header is loaded
    });

fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

mobileMenuToggle = () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const menuLinks = document.querySelectorAll('nav ul li a');

    function closeMenu() {
        navMenu.classList.toggle('active');
    }

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const isMainPage = window.location.pathname.startsWith('/index.html');
            if (isMainPage) {
                event.preventDefault();
            }
            closeMenu();
            if (isMainPage) {
                document.querySelector(link.getAttribute('href').replace('/index.html','')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

        // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && 
            !menuToggle.contains(event.target) && 
            navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
};