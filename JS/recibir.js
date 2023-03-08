// Obtener los datos desde el almacenamiento local
const dat = localStorage.getItem('cadenaJSON');
const datos = JSON.parse(dat) || []; // En caso de que no haya datos, se establece como una matriz vacía

// Obtener la referencia al contenedor de datos en la página
const datosContainer = document.getElementById('datos-container');

let html = '';
var enlace;
console.log(datos);

for(var a=0; a< 5; a++){
  if (a===0) {

      enlace = "noticia1.html"

  } else if (a===1) {

      enlace = "noticia2.html"

  } else if (a===2) {

      enlace = "noticia3.html"

  } else if (a===3) {

      enlace = "noticia4.html"

  } else if (a===4) {

      enlace = "noticia5.html"

  }
  

  // Escribo el "html" personalizado
  html = html + `
  <br>
  <li><b>Fecha:</b> ${datos[a].fecha}</li>  
  <li><b>Categoría:</b> ${datos[a].categoria}</li>
  <li><b>Descripción:</b> ${datos[a].descripcion}</li>
  <li><b>Autor:</b> ${datos[a].autor}</li>
  <li><h1><a href="${enlace}">${datos[a].titulo}</a></h1></li>
  `
  ;
  }
// Agregar la plantilla al contenedor de datos
datosContainer.innerHTML = html;
