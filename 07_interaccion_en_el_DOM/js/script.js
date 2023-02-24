// Esperar que el DOM este cargado
$(document).ready(function(){

    // Escuchar los <p>
    $('.contenido').children('p').on('click', function(evento) {
        evento.preventDefault();
        $(this).css('color', 'red'); //convertir this en objeto jquery
    });
   
});