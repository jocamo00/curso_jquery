// Esperar que el DOM este cargado
$(document).ready(function(){
    /*let $parrafo = $('p').last();

    //css
    $parrafo.css('color', 'goldenrod');

    // atributo data
    $parrafo.data('color', 'amarillo');

    // append
    let $enlace = $('<a href="http://www.media.es" target="_blank">wmedia.es</a>');
    $parrafo.append($enlace);*/

    // Method chaining - encadenamiento de métodos
    let $enlace = $('<a href="http://www.media.es" target="_blank">wmedia.es</a>');
    $('p').last().css('color', 'goldenrod').data('color', 'amarillo').append($enlace);
});