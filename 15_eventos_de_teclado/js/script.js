// Esperar que el DOM este cargado
$(document).ready(function(){

  let $input = $('#claim'),
      $h1 = $('.contenido').children('h1');

  $input.keyup(function (event) { 
    $h1.text($input.val());
  });

});