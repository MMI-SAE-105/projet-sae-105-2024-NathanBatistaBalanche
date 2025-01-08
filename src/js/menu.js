document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.header__mobile--menu__btn');
    const menu = document.getElementById('mainMenu');
    const closeButton = document.querySelector('.menu--cross__btn');

    menuButton.addEventListener('click', function () {
        menu.style.transform = 'translateX(100vw)';
        menu.style.display = 'block'; 
        setTimeout(function() {
            menu.style.transform = 'translateX(0)'; 
            menu.setAttribute('aria-hidden', 'false');
        }, 10);
});

    closeButton.addEventListener('click', function () {
        setTimeout(function() {
            menu.style.display = 'none';
            menu.setAttribute('aria-hidden', 'true');
        }, 300); 
        menu.style.transform = 'translateX(100vw)';
    });
});
