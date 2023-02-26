// Esperar que el DOM este cargado
$(document).ready(function(){

    // selector
    /*let $enlace = $('.lateral').find('a').filter(':odd');
    $enlace.css('transform', 'scale(2)');*/

    // función - test
    let $enlaceSnapchat = $('.lateral').find('a').filter(function (indice, elemento) {
        // console.log(elemento === this); // es this
        return $(elemento).find('span').text() === 'Snapchat';
      });

      console.log($enlaceSnapchat.css('transform', 'rotate(45deg'));

});