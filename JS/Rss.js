const generarRSS = () => {
    let rss = '<?xml version="1.0" encoding="UTF-8" ?>\n';
    rss += '<rss version="2.0">\n';
    rss += '<channel>\n';
    rss += '<title>Noticias</title>\n';
    rss += '<author>Autor</author>\n';
    rss += '<category>Categoria</category>\n';
    rss += '<date>Fecha</date>\n';
    rss += '<description>Noticias de ejemplo</description>\n';


    for (let i = 0; i < 5; i++) {
        const clave = localStorage.key(i);
        if (clave.startsWith("datos-")) {

            const datosJSON = localStorage.getItem(clave);
            const datos = JSON.parse(datosJSON);
            const titulo = datos.Titulo;
            const url = datos.URL;


            rss += '<item>\n';
            rss += '<title>${titulo}</title>\n';
            rss += '<link>${url}</link>\n';
            rss += '<author>${datos.Autor}</author>\n';
            rss += '<category>${datos.Categoría}</category>\n';
            rss += '<pudate>${datos.Fecha}</pudate>\n';
            rss += '<description>${datos.Descripción}</description>\n';

            rss += '</item>\n';
        }
    }

    rss += '</channel>\n';
    rss += '</rss>';

    const blob = new Blob([rss], {type: 'application/rss+xml'});
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'noticias.xml';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);
};

const botonRSS = document.createElement('button');
botonRSS.textContent = 'Generar RSS';
botonRSS.addEventListener('click', generarRSS);
document.body.appendChild(botonRSS);