// Esperar que el DOM este cargado
$(document).ready(function(){

    let $enlace = $('<a href="#">Conocer más gatos negros!</a>');
    $('.contenido').find('p').first().after($enlace);
   
});