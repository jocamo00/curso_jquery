// Esperar que el DOM este cargado
$(document).ready(function(){

    $('.contenido').find('p').first().css('background-color', 'red');
    $('.contenido').find('p').eq(2).css('background-color', 'green');

});