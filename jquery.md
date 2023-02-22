## jQuery


### Seleccionar desdendientes directos
```js
$('aside > img').fadeOut('slow');
```

### Búsqueda de elementos
```js
$('a span').css('color', 'red');
```

### Selectores múltiples
```js
$('a, span, p').slideToggle();
```

### Pseudo clases
```js
$('p:first').css({
        'font-weight': 'bold',
        'color': 'goldenrod'
});
```