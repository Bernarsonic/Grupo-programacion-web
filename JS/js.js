document.addEventListener("DOMContentLoaded", function() {
    function coger_datos() {
        // Captura de valores
        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;
        const link = document.getElementById("url").value;
        const autor = document.getElementById("autor").value;
        const categoria = document.getElementById("categoria").value;
        const fecha = document.getElementById("fecha").value;
        


// Obtener los datos existentes del localStorage
        let datosAnteriores = JSON.parse(localStorage.getItem('cadenaJSON')) || [];

        //Aqui se meten los datos
        const noticia ={
            titulo: titulo,
            descripcion: descripcion,
            link: link,
            autor: autor,
            categoria: categoria,
            fecha: fecha,
        };
        datosAnteriores.unshift(noticia);


// Guardar los datos actualizados en el localStorage
    localStorage.setItem('cadenaJSON', JSON.stringify(datosAnteriores));

        document.getElementById("titulo").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("url").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("fecha").value = "";
        //imprime en la consola
        console.log(noticia)
    }

    function borrarLocalStorage() {
        localStorage.clear();
      }

    const botonSumit = document.getElementById('BotonS');
    botonSumit.addEventListener('click', coger_datos);

    const botonVaciar = document.getElementById("BotonV");
    botonVaciar.addEventListener('click', borrarLocalStorage);

});