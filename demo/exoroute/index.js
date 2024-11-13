const express = require('express');
const app = express();
const port = 8000;

const userRouter = require('./router');

app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`le serveur est lance sur le port d'Amsterdam : http://localhost:${port}`);
});