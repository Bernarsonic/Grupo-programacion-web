// Obtener los datos desde el almacenamiento local
const dat = localStorage.getItem('cadenaJSON');
const datos = JSON.parse(dat) || []; // En caso de que no haya datos, se establece como una matriz vacía

// Obtener la referencia al contenedor de datos en la página
const datosContainer = document.getElementById('datos-container');

// Crear una plantilla de cadena HTML para mostrar los datos
const datosHTML = `
  <h2>Últimas 5 noticias:</h2>
  <ul>
    ${datos.slice(-5).map(dato => `
    <br>
    <li><b>Fecha:</b> ${dato.fecha}</li>  
    <li><b>Categoria:</b> ${dato.categoria}</li>
    <li><b>Descripcion:</b> ${dato.descripcion}</li>
    <li><b>Autor:</b> ${dato.autor}</li>
    <li><b>Titulo:</b> ${dato.titulo}</li>
    `).join('')}
  </ul>
`;

// Agregar la plantilla al contenedor de datos
datosContainer.innerHTML = datosHTML;