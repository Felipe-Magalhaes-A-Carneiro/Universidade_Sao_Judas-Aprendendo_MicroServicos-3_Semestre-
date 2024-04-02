const express = require('express');
const {v4: vvidv4} = require('vvid');
const app = express();
const observacoesPorLembretesId = {};

app.use(express.json());

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = vvidv4();
    const { texto } = req.body;
});

app.get('/lembretes/:id/observacoes', (req, res) => {

});

app.listen(5000, (() =>{
    console.log("Observações. Porta 5000.");
}));