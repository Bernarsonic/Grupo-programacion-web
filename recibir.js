const dat = localStorage.getItem('cadenaJSON')
datos= JSON.parse(dat)
console.log(datos)

const datosContainer = document.getElementById('datos-container')

// Crear una plantilla de cadena HTML para mostrar los datos
const datosHTML = `
  <h2>Datos:</h2>
  <ul>
    <li>Nombre: ${datos.nombre}</li>
    <li>Edad: ${datos.edad}</li>
    <li>Email: ${datos.email}</li>
  </ul>
`

// Agregar la plantilla al contenedor de datos
datosContainer.innerHTML = datosHTML