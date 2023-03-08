// Obtener los datos desde el almacenamiento local
const dat = localStorage.getItem('cadenaJSON');
const datos = JSON.parse(dat) || []; // En caso de que no haya datos, se establece como una matriz vacía

// Obtener la referencia al contenedor de datos en la página
const datosContainer = document.getElementById('datos-container');

let html = '';
var enlace;
console.log(datos);

for (var a = datos.length - 5; a < datos.length; a++){
  if(datos.length < 5){
    if (a=== 0) {

      enlace = "Noticia1.html"
  
    } else if (a===1 ) {
  
        enlace = "Noticia2.html"
  
    } else if (a===2 ) {
  
        enlace = "Noticia3.html"
  
    } else if (a===3 ) {
  
        enlace = "Noticia4.html"
  
    } else if (a===4 ) {
  
        enlace = "Noticia5.html"
  
    }
  }
  else{
    if (a=== datos.length - 5) {

      enlace = "Noticia1.html"
  
    } else if (a===datos.length - 4) {
  
        enlace = "Noticia2.html"
  
    } else if (a===datos.length - 3) {
  
        enlace = "Noticia3.html"
  
    } else if (a===datos.length - 2) {
  
        enlace = "Noticia4.html"
  
    } else if (a===datos.length - 1) {
  
        enlace = "Noticia5.html"
  
    }
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
