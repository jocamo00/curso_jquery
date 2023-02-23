## jQuery


### Seleccionar desdendientes directos

```html
<aside class="lateral">
    <img src="img/black-cat.jpg" alt="Black Cats Rules!">
</aside>
```
```javascript
$('aside > img').fadeOut('slow');
```

### Búsqueda de elementos
![Descripción de la imagen](img/Screenshot.png)


```html
 <a href="#">
    <img src="img/mail.png" alt="Correo-e">
    <span>Correo-e</span>
</a>
```
```javascript
$('a span').css('color', 'red');
```

### Selectores múltiples
```javascript
$('a, span, p').slideToggle();
```

### Pseudo clases
![Descripción de la imagen](img/Screenshot_01.png)

```html
<section class="contenido">
    <h1>Los gatos negros te dan la bienvenida</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</section>

```
```javascript
$('p:first').css({
        'font-weight': 'bold',
        'color': 'goldenrod'
});
```

### Búsqueda de elementos en el DOM
![Descripción de la imagen](img/Screenshot_02.png)

```html
<section class="contenido">
        <h1>Los gatos negros te dan la bienvenida</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</section>
```
```javascript
$('.contenido').find('p').first().css('background-color', 'red');
$('.contenido').find('p').eq(2).css('background-color', 'green');
```

### Encadenar métodos y recorrer el DOM

![Descripción de la imagen](img/Screenshot_03.png)

```html
<section class="contenido">
        <h1>Los gatos negros te dan la bienvenida</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</section>
```
```javascript
$('.contenido').find('p').last().prev().css('background-color', 'red');
```
