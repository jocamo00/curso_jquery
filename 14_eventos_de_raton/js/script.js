// Esperar que el DOM este cargado
$(document).ready(function(){

  let $parrafos = $('.contenido').children('p');

  $('.lateral').children('img').on('mouseleave', function() {
    mostrarEnSecuencia($parrafos);
  });

  // atajo para mouseenter y mouseleave

  /*$('.lateral').children('img').hover(function(){
    console.log('Entro');
  }, function(){
    console.log('Salgo');
  });*/

  function mostrarEnSecuencia($coleccion, tiempo) { 
    tiempo = tiempo || 1000;
    $coleccion.each(function(indice, elemento) {
      $(elemento).slideToggle(tiempo * (indice + 1));
    });
   }

});