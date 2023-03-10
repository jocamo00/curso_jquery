## jQuery

## HTML sobre el que se basaran los ejemplos jQuery
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    
    <!-- Contenedor principal -->
    <main>

        <!-- Sidebar -->
        <aside class="lateral">
            <img src="img/black-cat.jpg" alt="Black Cats Rules!">

            <!-- Social -->
            <a href="#">
                <img src="img/mail.png" alt="Correo-e">
                <span>Correo-e</span>
            </a>
            <a href="#">
                <img src="img/snapchat.png" alt="Snapchat">
                <span>Snapchat</span>
            </a>
            <a href="#">
                <img src="img/twitter.png" alt="Twitter">
                <span>Twitter</span>
            </a>
            
        </aside>

        <!-- Contenido -->
        <section class="contenido">
            <h1>Los gatos negros te dan la bienvenida</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex aliquid pariatur ad alias necessitatibus, hic corrupti delectus. Excepturi quis incidunt ratione officia hic amet, natus tempora nesciunt ipsum, atque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex aliquid pariatur ad alias necessitatibus, hic corrupti delectus. Excepturi quis incidunt ratione officia hic amet, natus tempora nesciunt ipsum, atque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex aliquid pariatur ad alias necessitatibus, hic corrupti delectus. Excepturi quis incidunt ratione officia hic amet, natus tempora nesciunt ipsum, atque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ex aliquid pariatur ad alias necessitatibus, hic corrupti delectus. Excepturi quis incidunt ratione officia hic amet, natus tempora nesciunt ipsum, atque.</p>

            
            <!-- Thumbnails -->
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    </main>




    <script src="lib/jquery-3.6.3.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```


### Seleccionar desdendientes directos
```javascript
$('aside > img').fadeOut('slow');
```

### B??squeda de elementos
![Descripci??n de la imagen](img/Screenshot.png)

```javascript
$('a span').css('color', 'red');
```

### Selectores m??ltiples
```javascript
$('a, span, p').slideToggle();
```

### Pseudo clases
![Descripci??n de la imagen](img/Screenshot_01.png)

```javascript
$('p:first').css({
        'font-weight': 'bold',
        'color': 'goldenrod'
});
```

### B??squeda de elementos en el DOM
![Descripci??n de la imagen](img/Screenshot_02.png)

```javascript
$('.contenido').find('p').first().css('background-color', 'red');
$('.contenido').find('p').eq(2).css('background-color', 'green');
```

### Encadenar m??todos y recorrer el DOM
![Descripci??n de la imagen](img/Screenshot_03.png)

```javascript
$('.contenido').find('p').last().prev().css('background-color', 'red');
```

### Buscar arriba y abajo en el DOM
![Descripci??n de la imagen](img/Screenshot_04.png)

```javascript
// parent (solo el primer padre del elemento)
let $parent = $('.lateral').find('span').last().parent();
    $parent.css('border', '1px solid red');
```

![Descripci??n de la imagen](img/Screenshot_05.png)

```javascript
// parents (todos los padres)
let $parent = $('.lateral').find('span').last().parents();
    $parent.css('border', '1px solid red');
```

![Descripci??n de la imagen](img/Screenshot_06.png)

```javascript
// children / find
    let $children = $('main').children();
    $children.css('border', '1px solid red');
```

![Descripci??n de la imagen](img/Screenshot_07.png)

```javascript
// children / find
    let $children = $('main').find('*');
    $children.css({
        'transition': 'all 2s',
        'transform': 'rotate(180deg)'
    });
```

### Insertar contenido en el DOM
Con .after y .before se a??ade antes o despues del elemento seleccionado
![Descripci??n de la imagen](img/Screenshot_08.png)

```javascript
    let $enlace = $('<a href="#">Conocer m??s gatos negros!</a>');
    $('.contenido').find('p').first().after($enlace);
```

### Insertar contenido en el DOM II
Con .prepend y .append se a??ade dentro del elemento seleccionado al principio o al final.
![Descripci??n de la imagen](img/Screenshot_09.png)

```javascript
    let $enlace = $('<a href="#">Conocer m??s gatos negros!</a>');
    $('.contenido').find('p').prepend($enlace);
```

### Eliminar elementos del DOM
![Descripci??n de la imagen](img/Screenshot_10.png)

```javascript
$('.contenido').find('p').remove();
```

### Interacci??n en el DOM
Cuando haga click en el enlace de Twitter, todos los parrafos se pondr??n en rojo.

![Descripci??n de la imagen](img/Screenshot_11.png)

```javascript
// Escuchar un <a>
    $('.lateral').find('a').last().on('click', function() {
        $('.contenido').children('p').css('color', 'red');
    });
```

### This
![Descripci??n de la imagen](img/Screenshot_12.png)

Convertimos "this" en un objeto jquery para poder usar los m??todos de jquery. Con "this" obtenemos que el evento se produzca sobre el elemento con el que interaccionamos, en este caso haciendo click.
```javascript
// Escuchar los <p>
    $('.contenido').children('p').on('click', function(evento) {
        evento.preventDefault();
        $(this).css('color', 'red'); //convertir this en objeto jquery
    });
```

### Atributos data
```javascript
// data en este caso es un getter, nos devuelve lo que hay el atributo data-rrss
    /*let $enlace = $('.lateral').find('a').last();
    let valorData = $enlace.data('rrss');
    console.log(valorData);*/

    // data en este caso es un setter, cambia el valor del atributo
    let $enlace = $('.lateral').find('a').last();
    $enlace.data('rrss', 'Nuevo valor')
    let valorData = $enlace.data('rrss');
    console.log(valorData);
```

### Variable cache
![Descripci??n de la imagen](img/Screenshot_13.png)
```javascript
/*let $parrafo = $('p').last();

    //css
    $parrafo.css('color', 'goldenrod');

    // atributo data
    $parrafo.data('color', 'amarillo');

    // append
    let $enlace = $('<a href="http://www.media.es" target="_blank">wmedia.es</a>');
    $parrafo.append($enlace);*/

    // Method chaining - encadenamiento de m??todos
    let $enlace = $('<a href="http://www.media.es" target="_blank">wmedia.es</a>');
    $('p').last().css('color', 'goldenrod').data('color', 'amarillo').append($enlace);
```

### Event delegation
Si ponemos un event listener, este no funcionara sobre elementos que a??amos insertado despu??s en el DOM,
para solucionar esto hacemos un event listener delegation, que es pasar un tercer parametro con el 
elemento sobre el que queremos hacer el evento y seleccionamos un elemento del DOM que estuviera en el DOM desde el principio y contenga el elemento sobre el que queremos ejecutar el evento.

```javascript
// event listener directo (no funcionaria con elementos que a??adamos despu??s en el DOM)
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
```

### Filtrar resultados
![Descripci??n de la imagen](img/Screenshot_14.png)

```javascript
// selector
    /*let $enlace = $('.lateral').find('a').filter(':odd');
    $enlace.css('transform', 'scale(2)');*/

    // funci??n - test
    let $enlaceSnapchat = $('.lateral').find('a').filter(function (indice, elemento) {
        // console.log(elemento === this); // es this
        return $(elemento).find('span').text() === 'Snapchat';
      });

      console.log($enlaceSnapchat.css('transform', 'rotate(45deg'));
```

### M??todo slideToggle
slideToggle funciona a modo interruptor mostrar/ocultar contenido. Se le pasan los elementos y se le puede pasar otros par??metros como el tiempo de duraci??n, etc...

En este ejemplo se ocultar??n y mostrar??n los p??rrafos, ocultaremos los p??rrafos al principio a??adiendo este estilo al html.

```html
<style>
    .contenido p {
        display: none;
    }
</style>
```

```javascript
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
```

### Eventos de rat??n

```javascript 
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
```

### Eventos de teclado

![Descripci??n de la imagen](img/Screenshot_15.png)

Estos eventos funcionan bien con inputs, a??adimos un input en el html, lo que escribamos en este input cambiara el h1.
```html
 <link rel="stylesheet" href="css/main.css">
    <style>
        #claim {
            width: 100%;
            padding: 10px;
        }
    </style>
</head>
<body>
    
    <!-- Contenedor principal -->
    <main>

        <!-- Sidebar -->
        <aside class="lateral">
            <img src="img/black-cat.jpg" alt="Black Cats Rules!">
            <input type="text" id="claim">
```
```javascript
let $input = $('#claim'),
      $h1 = $('.contenido').children('h1');

  $input.keyup(function (event) { 
    $h1.text($input.val());
  });
```

### Keyboard keycodes
Las teclas tienen un c??digo, con which podemos capturar la letra con la que queremos que se desencadene un evento. Por ejemplo con el intro, en el ejemplo escribimos en el input y al presionar intro el texto del h1 se sustituye por el introducido en el input.

```javascript
let $input = $('#claim'),
      $h1 = $('.contenido').children('h1');

  $input.keyup(function (event) { 
    let codigo = event.which;
    if(codigo === 13){
      $h1.text($input.val());
    }
  });
```