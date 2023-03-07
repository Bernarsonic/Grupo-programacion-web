document.addEventListener("DOMContentLoaded", function() {



    function coger_datos() {
        // Captura de valores
        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const link = document.getElementById("url").value;
        const autor = document.getElementById("autor").value;
        const categoria = document.getElementById("categoria").value;
        const fecha = document.getElementById("fecha").value;


// Leer los datos existentes en localStorage
        const contenidoAnterior = localStorage.getItem('cadenaJSON');
        let datosAnteriores = [];
        if (contenidoAnterior) {
            // Convierte la cadena JSON en un objeto JavaScript
            datosAnteriores = JSON.parse(contenidoAnterior);
        }
        //Aqui se meten los datos
        const noticia ={
            titulo: titulo,
            descripcion: descripcion,
            link: link,
            autor: autor,
            categoria: categoria,
            fecha: fecha,
        };
        datosAnteriores.push(noticia);

// Convierte el objeto JavaScript en una cadena JSON
        const nuevoContenido = JSON.stringify(datosAnteriores);

// Guardar la cadena JSON en localStorage
        localStorage.setItem('cadenaJSON', nuevoContenido);


        //imprime en la consola
        console.log(nuevoContenido)
    }

    function borrar() {
        const titulo = document.getElementById("titulo").value = "";
        const descripcion = document.getElementById("descripcion").value = "";
        const link = document.getElementById("url").value = "";
        const autor = document.getElementById("autor").value = "";
        const categoria = document.getElementById("categoria").value = "";
        const fecha = document.getElementById("fecha").value = "";
    }

    const botonSumit = document.getElementById('BotonS');
    botonSumit.addEventListener('click', coger_datos);

    const botonVaciar = document.getElementById("BotonV");
    botonVaciar.addEventListener('click', borrar);

});