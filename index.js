// import du module http
const http = require ('http');
// declaration du port ecoute par le serveur
const port = 8000;
// declaration et init du serveur
//create serveur prend un callback qui va prendre deux param
// request ( contenir info requette http intercept , response va ocntenir toute les info que le serveur va envoye
const server = http.createServer((req, res) => {
    //declaration d'une constante qui va recup les info de l'url de la requete
    const url = req.url.toLowerCase();
    console.log(url);
    const method = req.method.toLowerCase();
    //pour cree une systemende routing en nodejs on a besoin de passe par une structure conditionnelle
    if (method === 'get' && url === '/') {
        const body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8" http-equiv="Content-Type">
        <title>Document</title>
            </head>
            <body>
            <h1>Hello World</h1>
            </body>
            </html>

`; res.end(body);

    } else if (method === 'get' && productRegex.test(url)) {
        const prudctId = productRegex.exec(url);
    }
})
//mise a lecouteur du serveur sur le port
server.listen(port, () => {
    console.log(`le serveur est lance sur le port : http://localhost:${port}`);
})
//verbe http
//get : demande au serveur une ressource - un url via un element specifique genre id
//post : envoie donne au serveur qui verifie les envoie ensuite a la db ou pas
//delete : recuper ue ressource via son id et la supprime de la deb
//put: modifie lin tegralite d'une ressource
//patch: modifie partie d'une ressource