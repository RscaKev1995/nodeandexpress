const express = require('express');
const app = express();
const port = 8000;

//middleware pour parse json
app.use(express.json());
//route de base

app.get('/', (req, res) => {
  //  res.status(200).send('Hello World');
    res.status(200).json({message: 'Bienvenue sur votre premier serveur express'})
})
//ecoute du port

app.listen(port, () => {
    console.log(`le serveur est lance sur le port : http://localhost:${port}`);
})