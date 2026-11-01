function loadComponent(url, placeholderId) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.text();
        })
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
            if (placeholderId === 'header-placeholder') initMobileMenu();
        })
        .catch(err => console.error('Error al cargar ' + url + ':', err));
}

loadComponent('header.html', 'header-placeholder');
loadComponent('footer.html', 'footer-placeholder');

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.querySelector('header');
    if (!menuToggle || !navMenu) return;

    function setMenu(open) {
        navMenu.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', String(open));
    }

    function closeMenu() {
        setMenu(false);
    }

    function syncHeaderHeight() {
        if (header) {
            document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
        }
    }
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight);

    menuToggle.addEventListener('click', () => {
        setMenu(!navMenu.classList.contains('active'));
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            const path = window.location.pathname;
            const isMainPage = path === '/' || path === '/index.html' ||
                path === '/web/' || path === '/web/index.html';
            closeMenu();
            if (isMainPage && href.startsWith('index.html#')) {
                event.preventDefault();
                document.querySelector(href.replace('index.html', '')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // Cerrar el menú con Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeMenu();
    });
}
