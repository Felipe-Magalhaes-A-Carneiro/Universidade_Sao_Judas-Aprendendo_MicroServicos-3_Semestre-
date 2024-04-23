const express = require("express");
const app = express();
app.use(express.json());
const baseConsulta = {};

const funcoes = {
    LembreteCriado: (lembretes) =>{
        baseConsulta[lembretes.contador] = lemnbrete;
    },
    ObservacaoCriada:  (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"] || [];
        observacoes.push(observacao);
        baseConsulta[observacao.lembreteId]["observacoes"] = observacoes;
    }
};

app.get("/lembretes", (req, res) =>{
    res.send(baseConsulta);
});

app.get("/eventos", (req, res) => {
    funcoes[req.body.tipo](req.body.dados);
    res.send(baseConsulta);
});

app.listen (6000, () => console.log("Consulta. Porta 6000."));