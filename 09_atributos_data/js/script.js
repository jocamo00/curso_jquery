// Esperar que el DOM este cargado
$(document).ready(function(){

    // data en este caso es un getter, nos devuelve lo que hay el atributo data-rrss
    /*let $enlace = $('.lateral').find('a').last();
    let valorData = $enlace.data('rrss');
    console.log(valorData);*/

    // data en este caso es un setter, cambia el valor del atributo
    let $enlace = $('.lateral').find('a').last();
    $enlace.data('rrss', 'Nuevo valor')
    let valorData = $enlace.data('rrss');
    console.log(valorData);
});