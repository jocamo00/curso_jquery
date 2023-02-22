// Esperar que el DOM este cargado
$(document).ready(function(){

    // Descendientes directos
    $('aside > img').fadeOut('slow');

    // Búsqueda de elementos
    $('a span').css('color', 'red');

    // Selectores múltiples
    // $('a, span, p').slideToggle();

    // Pseudo classes
    $('p:first').css({
        'font-weight': 'bold',
        'color': 'goldenrod'
    });

});