$(document).ready(function() {

    //NAVBAR SCROLL MENU
    var about = $('#miAbout').offset().top,
        trabajos = $('#miTrabajo').offset().top,
        contacto = $('#miContacto').offset().top;

    $('#btn-about').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 60
        }, 400);
    });

    $('#btn-trabajos').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajos - 50
        }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });

});