// Obtener los datos desde el almacenamiento local
const dat = localStorage.getItem('cadenaJSON');
const datos = JSON.parse(dat) || []; // En caso de que no haya datos, se establece como una matriz vacía

// Obtener la referencia al contenedor de datos en la página
const datosContainer = document.getElementById('datos-container');

// Crear una plantilla de cadena HTML para mostrar los datos
const datosHTML = `
  <h2>Datos:</h2>
  <ul>
    ${datos.map(dato => `
      <li>Titulo: ${dato.titulo}</li>
      <li>Autor: ${dato.autor}</li>
      <li>Email: ${dato.email}</li>
    `).join('')}
  </ul>
`;

// Agregar la plantilla al contenedor de datos
datosContainer.innerHTML = datosHTML;