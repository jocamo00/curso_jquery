// Esperar que el DOM este cargado
$(document).ready(function(){

    // Escuchar un <a>
    $('.lateral').find('a').last().on('click', function() {
        $('.contenido').children('p').css('color', 'red');
    });
   
});