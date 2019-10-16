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
var $borrar = $('#borrar');
var $guardar = $('#guardar');

// Muestra las opciones de colores
function colores(){
  for(var i = 0; i < nombreColores.length; i++){
    var crearDiv = document.createElement('div');
    crearDiv.className = "color-paleta";
    crearDiv.style.backgroundColor = nombreColores[i];
    paleta.appendChild(crearDiv);
  }
}
colores();

// Muestra la grilla en blanco
function crearGrilla(){
  for(var i=0; i < 1751; i++){
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
  }
}
crearGrilla();

// Variable para guardar el elemento 'color-personalizado' que se elige con la rueda de color
var colorPersonalizado = document.getElementById('color-personalizado');

// Cambia el indicador-de-color por el color-personalizado
colorPersonalizado.addEventListener('change', 
  (function(){
    colorActual = colorPersonalizado.value;
    $('#indicador-de-color').css("background-color", colorActual);
  })
);

// Para el funcionamiento del indicador de color
var $colorSeleccionado = $("div.color-paleta");
$colorSeleccionado.click(function(){
  var $colorNuevo = $(this).attr("style");
  $('#indicador-de-color').attr("style", $colorNuevo);
});

// Para el funcionamiento de pintar el pixel de la grilla
var $pixelSeleccionado = $("#grilla-pixeles").find("div");
var $indicadorColor = $('#indicador-de-color').css("background-color");

function pintar(){
  $pixelSeleccionado.click(function(){
    var $indicadorColor = $('#indicador-de-color').css("background-color");
    $(this).css("background-color", $indicadorColor);
  });
};
pintar();

//Chequea que el mouse esté activo

 
function mouseActivo(){
  var click = false;

  $pixelSeleccionado.mousedown(function(){
    click = true;
    });
  
  $pixelSeleccionado.mouseup(function(){
    click = false;
  });

  grilla.addEventListener("mouseover", function( event ) {   
    if(click){
      $indicadorColor = $('#indicador-de-color').css("background-color");
      event.target.style.backgroundColor = $indicadorColor;
    }
  });
 
};
mouseActivo();

// Para funcionalidad de Borrar todo
// Lo que sucederá cuando el botón borrar se clickee:
var $fondo = $('#grilla-pixeles div');
$borrar.click( function(){
  $fondo.animate({
    "background-color": "#FFF"
  }, 1250);
});

// Para cargar las imágenes de superhéroes
var $batman = $('#batman');
var $wonder = $('#wonder');
var $flash = $('#flash');
var $invisible = $('#invisible');
$batman.click(function(){
  cargarSuperheroe(batman);
});
$wonder.click(function(){
  cargarSuperheroe(wonder);
});
$flash.click(function(){
  cargarSuperheroe(flash);
});
$invisible.click(function(){
  cargarSuperheroe(invisible);
});

//Para guardar la imagen
$guardar.click(function(){
  guardarPixelArt();
});
