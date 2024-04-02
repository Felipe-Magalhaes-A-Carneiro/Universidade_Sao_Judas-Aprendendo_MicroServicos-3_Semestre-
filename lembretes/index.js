//Apostila usada: '03_apostila_microservicoes'

const express = require('express');
const app = express();
app.use(express.json()); //Obs: Diferente da apostila, será usado o json em tudo, logo não terá o 'const bodyParser = require(body-parse);', na página 25 da apostila '03_apostila_microservicoes'
const lembretes = {};
contador = 0;

app.get('/lembretes', (req, res) => {
    res.send(lembretes);
});

app.post('/lembretes', (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = {
        contador, texto
    };
    res.status(201).send(lembretes[contador]); // Vá para o 'package.jason' da pasta lembretes, e faça no terminal (cd lembretes), em seguida faça 'npm start'. Em seguida utilize a extensão 'Thunder Client', utilize o GET e cole novamente o link localhost:4000/lembretes e dê um SEND
});

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.");
});