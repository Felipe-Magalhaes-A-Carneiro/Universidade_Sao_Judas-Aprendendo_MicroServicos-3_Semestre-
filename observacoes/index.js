const express = require('express');
const {v4: vvidv4} = require('vvid');
const app = express();
const observacoesPorLembretesId = {};

app.use(express.json());

app.post('/lembretes/:id/observacoes', (req, res) => {
    
    //Gerar um novo identificador para a observação a ser inserida.
    const idObs = vvidv4();

    //Extrair, do corpo da requisição, o texto da observação.
    const { texto } = req.body;

    //Verificar se o id de lembrete existente na URL já existe na vase e está associado a uma coleção.
    const observacoesDoLembrete = observacoesPorLembretesId [req.params.id] || []

    //Adicionar a nova observaçao à coleção de observações recém obtida / criada:
    observacoesDoLembrete.push({id: id0bs, texto});

    // Fazer com que o identificador do lembrete existente na URL esteja associado a essa nova coleção alterada, na base de observações por id de lembrete:
    observacoesPorLembretesId[req.params.id] = observacoesDoLembrete;
    
    // Devolver uma resposta ao usuário enolvendo o código de status HTTP e algum objeto de interesse, possivelmente a observação inserida ou, ainda, a coleção inteira de observações
    res.status(201).send (observacoesDoLembrete);

});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res. send(observacoesPorLembretesId[req.params.id] || []);

});

app.listen(5000, (() =>{
    console.log("Observações. Porta 5000.");
}));