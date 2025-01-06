document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.header__mobile--menu__btn');
    const menu = document.getElementById('mainMenu');
    const closeButton = document.querySelector('.menu--cross__btn');

    menuButton.addEventListener('click', function () {
        menu.style.display = 'block';
        menu.setAttribute('aria-hidden', 'false');
    });

    closeButton.addEventListener('click', function () {
        menu.style.display = 'none';
        menu.setAttribute('aria-hidden', 'true');
    });
});
