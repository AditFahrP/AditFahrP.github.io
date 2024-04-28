hamburgerBtn = document.getElementById('hamburgerButton');
hamburgerBtn.addEventListener('click', () => {
    document.querySelector('.navbar-menu__offcanvas').classList.toggle('open');
});

const closeOffcanvasMenu = () => {
    document.querySelector('.navbar-menu__offcanvas').classList.remove('open');
};
xmarkBtn = document.getElementById('xmarkButton');
navMenuBtn = document.querySelectorAll('.navbar-menu__list-offcanvas-item');
xmarkBtn.addEventListener('click', () => {
    closeOffcanvasMenu();
});
for(i = 0; i < navMenuBtn.length; i++) {
    navMenuBtn[i].addEventListener('click', closeOffcanvasMenu);
};

var tahunElement = document.getElementById("tahun");
    var tahunSaatIni = new Date().getFullYear();
    tahunElement.textContent = tahunSaatIni;
