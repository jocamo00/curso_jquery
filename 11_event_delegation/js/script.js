// Esperar que el DOM este cargado
$(document).ready(function(){

    // event listener directo
    /*$('a').on('click', function(evt) {
        evt.preventDefault();
        console.log('A clicked!');
    });*/

    // event listene delegado
    $('main').on('click', 'a', function(evt) {
        evt.preventDefault();
        console.log('A clicked!');
    });
    
    let $enlace = $('<a href="http://www.media.es" target="_blank">wmedia.es</a>');
    $('p').last().css('color', 'goldenrod').data('color', 'amarillo').append($enlace);

});