// Obtener los datos desde el almacenamiento local
const dat = localStorage.getItem('cadenaJSON');
const datos = JSON.parse(dat) || []; // En caso de que no haya datos, se establece como una matriz vacía

// Obtener la referencia al contenedor de datos en la página
const datosContainer = document.getElementById('datos-container');

let html = '';
var enlace;


for(var b=0; b< datos.length; b++){
    if (b===0) {

        enlace = "Noticia1.html"

    } else if (b===1) {

        enlace = "Noticia2.html"

    } else if (b===2) {

        enlace = "Noticia3.html"

    } else if (b===3) {

        enlace = "Noticia4.html"

    } else if (b===4) {

        enlace = "Noticia5.html"

    }
    // Escribo el "html" personalizado
    html = html + `
  <br>
  <ul>
  <li><h1><a href="${enlace}">${datos[b].titulo}</a></h1></li>
  </ul>
  <br>
  `
    ;
}


// Agregar la plantilla al contenedor de datos
datosContainer.innerHTML = html;
