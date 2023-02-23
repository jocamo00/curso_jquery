// Esperar que el DOM este cargado
$(document).ready(function(){

    // parent / parents
    /*let $parent = $('.lateral').find('span').last().parents();
    $parent.css('border', '1px solid red');*/

    // children / find
    /*let $children = $('main').children();
    $children.css('border', '1px solid red');*/

    let $children = $('main').find('*');
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });
});