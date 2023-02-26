// Esperar que el DOM este cargado
$(document).ready(function(){

  let $parrafos = $('.contenido').children('p');

  /*$parrafos.slideToggle(3000, function() {
    console.log('Finalizado!');
  });*/

  $('.lateral').children('img').on('click', function() {
    mostrarEnSecuencia($parrafos);
  })

  function mostrarEnSecuencia($coleccion, tiempo) { 
    tiempo = tiempo || 1000;
    $coleccion.each(function(indice, elemento) {
      $(elemento).slideToggle(tiempo * (indice + 1));
    });
   }

});