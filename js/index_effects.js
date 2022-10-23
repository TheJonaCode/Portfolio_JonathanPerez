$(document).ready(function() {

    //SCROLL EFFECTS
    AOS.init();

    //NAVBAR SCROLL MENU
    var about = $('#miAbout').offset().top,
        habilidades = $('#misHabilidades').offset().top,
        trabajos = $('#miTrabajo').offset().top,
        contacto = $('#miContacto').offset().top;

    $('#btn-about').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 60
        }, 400);
    });

    $('#btn-habilidades').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: habilidades - 200
        }, 500);
    });

    $('#btn-trabajos').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajos - 190
        }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });

    //Navbar Scroll Hide
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function() {
        menu.classList.toggle('menu__scroll', window.scrollY > 200)
    })
});