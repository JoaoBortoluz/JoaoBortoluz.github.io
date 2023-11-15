document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.getElementById('mobile-menu-toggle');
    var menu = document.getElementById('menu');
    
    mobileMenuButton.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    var menuItems = document.querySelectorAll('#menu ul li a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
});