const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Isaac Bonilla',
        edad: 20,
        url: req.url
    }
    res.write(JSON.stringify(salida));

    // res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el Puerto 8080');