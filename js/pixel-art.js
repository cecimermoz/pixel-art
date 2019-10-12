var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');

function colores(){
  for(var i = 0; i < nombreColores.length; i++){
    
    var crearDiv = document.createElement('div');
    crearDiv.className = "color-paleta";
    crearDiv.style.backgroundColor = nombreColores[i];
    paleta.appendChild(crearDiv);

  }
}
colores();

function crearGrilla(){
  for(var i=0; i < 1751; i++){
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  }
}
crearGrilla();

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color') = colorActual;
  })
);

/* Primero, vamos a hacer que nuestro programa permita al usuario seleccionar un color
de la paleta. Para eso, necesitamos lograr que, al hacer clic en algún color,
el indicador-de-color cambie y refleje la selección.

Por ejemplo, si cliqueamos en el color violeta,
el indicador-de-color deberá cambiar a violeta.*/

var colorSeleccionado = $("div.color-paleta");

colorSeleccionado.click(function(){
  var colorNuevo = $(this).attr("style");
  $('#indicador-de-color').attr("style", colorNuevo);
});

/*
imagenesVarias.click(function() {
  var nuevaImagen = $(this).attr('src');
  imagenPrincipal.attr('src', nuevaImagen);
  console.log(imagenesVarias);
  
});

/*
Para eso debo acceder a:
  - escuchar cuando hacen click en el div.color-paleta que se encuentre dentro
  de #paleta (o var paleta)

  - Tomar el backgroundColor de $(this)

  - cambiar el color de indicador, por el del $(this)
*/


