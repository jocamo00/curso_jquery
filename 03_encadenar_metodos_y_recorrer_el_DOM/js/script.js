// Esperar que el DOM este cargado
$(document).ready(function(){

    $('.contenido').find('p').last().prev().css('background-color', 'red');

});