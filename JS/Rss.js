const generarRSS = () => {
    const items = JSON.parse(localStorage.getItem('cadenaJSON')).slice(-5).reverse();
    let rss = '<?xml version="1.0" encoding="UTF-8" ?>\n';
    rss += '<rss version="2.0">\n';
    rss += '<channel>\n';
    rss += '<title>Noticias</title>\n';
    rss += '<author>Autor</author>\n';
    rss += '<section>Categoria</section>\n';
    rss += '<pubDate>Fecha</pubDate>\n';
    rss += '<description>Noticias de ejemplo</description>\n';

    items.forEach((item) => {
        rss += '<item>\n';
        rss += `<title>${item.titulo}</title>\n`;
        rss += `<descripcion>${item.descripcion}</descripcion>\n`;
        rss += `<link>${item.link}</link>\n`;
        rss += `<autor>${item.autor}</autor>\n`;
        rss += `<section>${item.categoria}</section>\n`;
        rss += `<pubDate>${item.fecha}</pubDate>\n`;
        rss += `<enclosure>${item.linkI}</enclosure>\n`;
        rss += '</item>\n';
    });

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