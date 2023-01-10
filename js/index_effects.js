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

    //SCROLL ACTIVE EFFECT
    const menu = document.querySelector('.menu');
    const li_about = document.querySelector('#btn-about');
    const li_hab = document.querySelector('#btn-habilidades');
    const li_work = document.querySelector('#btn-trabajos');
    const li_contact = document.querySelector('#btn-contacto');

    window.addEventListener('scroll', function() {
        menu.classList.toggle('menu__scroll', window.scrollY > 200)
    });

    window.addEventListener('scroll', function() {
        li_about.classList.toggle('active', window.scrollY > 500 && window.scrollY < 1200)
    });

    window.addEventListener('scroll', function() {
        li_hab.classList.toggle('active', window.scrollY > 1200 && window.scrollY < 1600)
    });

    window.addEventListener('scroll', function() {
        li_work.classList.toggle('active', window.scrollY > 1600 && window.scrollY < 2200)
    })

    window.addEventListener('scroll', function() {
        li_contact.classList.toggle('active', window.scrollY > 2200)
    })

    //DARK MODE
    const activeButton = document.querySelector('.dark__mode');
    const page = document.querySelector('.page');
    const pageText = document.getElementsByClassName('textDark');
    const skillCode = document.querySelector('.skill__code');

    activeButton.addEventListener("click", function() {
        activeButton.classList.toggle("no__dark__mode")
        page.classList.toggle("pageDark");
        skillCode.classList.toggle("skill__codeDark");
        for (let i = 0; i < pageText.length; i++) {
            pageText[i].classList.toggle("darkText");
        }
    });
});